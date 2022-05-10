const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();
const multer = require('multer')
const sharp = require('sharp')

//api for creating user model db
router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

//login route for user
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    //authentication with token
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

//logout user route
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

//logout all user
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

//resource read
router.get("/users", auth, async (req, res) => {
  res.send(req.user);

  //    try {
  //        const users =  await User.find({})
  // res.send(users)
  //     } catch (e) {
  //         res.status(500).send(e)
  //     }
});

//read by id
router.get("/users/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
  const user = await User.findById(_id)
   
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    }
    catch(e)  {
      res.status(500).send(e);
    };
});

//update router
router.patch("/users/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowUpdates = ["name", "age", "email", "password"];
  const isValidOperation = updates.every((update) =>
    allowUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "invalid updates" });
  }
  //ADJUSTMENT TO RUN MIDDLEWARE
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//resource delete endpoint
router.delete("/users/me", auth, async (req, res) => {
  try {
    // const user = await User.findOneAndDelete(req.user._id);
    // if (!user) {
    //    res.status(404).send();
    // }
    // res.send(user);
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

//file upload route api using multer
const upload = multer({
limits: {
    fileSize: 1000000, // 1 mb
    
  },
  //validation of file uploads
  fileFilter(req,file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
          return cb(new Error('please upload an image'))
      }
      cb(undefined, true)
    }
})
router.post('/users/me/avatar',auth, upload.single('avatar'), async (req, res) => {
 const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()

  req.user.avatar = buffer
  await req.user.save()
  res.send()
  //handling express errors
}, (error, req, res, next) => {
res.status(400).send({error: error.message })

})



//avatar delete api route
router.delete('/users/me/avatar', auth, async(req, res) => {
  req.user.avatar = undefined
  await req.user.save()
  res.send()
})

router.get('/users/:id/avatar', async(req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    if(!user || !user.avatar) {
      throw new Error
    }
    res.set('Content-Type', 'image/png')
   res.send(user.avatar)
  } catch (e) {
    res.status(404).send()
  }
})
module.exports = router;
