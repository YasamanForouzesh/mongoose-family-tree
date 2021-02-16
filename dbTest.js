const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/familyTree')

mongoose.connection.once('connected', () => {
    console.log('MongoDB Connected!')
})

mongoose.connection.on('error', (err) => {
    console.log(`Database Error: ${err}`)
})

const User = require('./models/user')

let newUser = User({
    name: 'Nick',
    email: 'n@q.com',
    meta: {
        age: 27,
        website: 'nickquandt.com'
    }
})

// console.log(newUser.sayHello())

// newUser.save(() => {
//     console.log('User Created!')
//     process.exit()
// })

// User.create({name: 'Dave', email: 'd@s.com'}, (err, user) => {
//     if(err) return console.log(err)
//     console.log(user)
//     process.exit()
// })

// User.find({}, (err, users) => {
//     if(err) return console.log(err)
//     console.log(users)
//     process.exit()
// })

// User.findOne({name: 'Dave'}, (err, user) => {
//     if (err) return console.log(err)
//     console.log(user)
//     process.exit()
// })

// User.updateOne({name: 'Nick'}, {meta: {age: 28}}, (err, user) => {
//     if(err) return console.log(err)
//     console.log(user)
//     process.exit()
// })

// User.findOneAndUpdate({name: 'Nick'}, {meta: {age: 15}}, (err, user) => {
//     if(err) return console.log(err)
//     console.log(user)
//     process.exit()
// })

// User.remove({name: 'Dave'}, (err) => {
//     if (err) return console.log(err)
//     console.log('User deleted!')
//     process.exit()
// })

// User.findOneAndRemove({name: 'Nick'}, (err) => {
//     if(err) return console.log(err)
//     console.log('User deleted!')
//     process.exit()
// })