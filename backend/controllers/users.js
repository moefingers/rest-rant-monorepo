const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

router.post('/', async (req, res) => {
    console.log(req.body)
    let hashedPassword = await bcrypt.hash(req.body.password, 10)
    let { password, ...rest } = req.body
    let userToCreate = {
        ...rest,
        role: 'reviewer',
        passwordDigest: hashedPassword
    }
    console.log(userToCreate)
    const user = await User.create(userToCreate)
    console.log(user)
    res.json(user)
})


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router