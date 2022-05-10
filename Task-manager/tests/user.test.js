const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'mike',
    age: 30,
    email: 'mike@gmail.com',
    password: 'whatis66',
    tokens: [{
        token: jwt.sign({ _id: userOneId },
             process.env.JWT_SECRET)
    }]
}
//setup methods like expect
beforeEach( async() => {
  await User.deleteMany()
  await User(userOne).save()
})
//supertest provides .expect at end of test(()) to give output
test('should signup a new user', async () => {
  const response =  await request(app).post('/users').send ({
        name: 'naaz',
        email: "naaz@gmail.com",
        password: 'Mnaaz09',
        age: 22
    }).expect(201)
    //assert that the database was changed successfully
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    //asssertions about the response
   expect(response.body).toMatchObject({
       user: {
           name : 'naaz',
           email: 'naaz@gmail.com',
           age: 22
       },
       
        //    token: user.tokens[0].token
       
   })

   expect(user.password).not.toBe('Mnaaz09')
 })

test('should login existing user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('should not login nonexisting user',  async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'thisisnotmypass'
    }).expect(400)
})
test('Should get user profile for user', async () => {
    await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send().expect(200)
})
console.log(userOne)
test('should not get profile for unauthorised user', async () => {
    await request(app)
    .get('/users')
    .send()
    .expect(401)
    
})
test('should delete account for user', async () => {
    await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
    
})
test('should not delete profile for unauthorised user', async () => {
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
    
})
//if npm test doesn't run and gives errir
//try: env-cmd -f ./config/dev.env nodemon src/index.js

test('should upload avatar image', async() => {
    await request(app)
    .post('/users/me/avatar')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .attach('avatar', 'tests/fixtures/philly.jpg')
    .expect(200)
    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

//update test
test('should update valid user fields', async () => {
    await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
        name: 'jess'
    })
    .expect(200)
    

const user = await User.findById(userOne)
expect(user.name).toEqual('jess')
})