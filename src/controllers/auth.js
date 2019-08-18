const express = require('express')
const bcrypt = require('bcryptjs')

const User = require('../models/user')

const router = express.Router()

router.post('/register', async (req, res) => {
    const { email }  = req.body
    try {
        if (await User.findOne({ email }))
        return res.status(400).send({ error: 'Usuário ja existente' })

        const user = await User.create(req.body)

        user.password = undefined

        return res.send({ user })    
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro' })
    }
})

router.post('/autenticacao', async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if (!user) 
    return res.status(400).send({ error: 'Usuário não encontrado' })

    //se as senhas não batem    
    if(!await bcrypt.compare(password, user.password)) 
    return res.status(400).send({ error: 'Senhas não conferemrs' })

    res.send({ user })
})

module.exports = app => app.use('/auth', router)