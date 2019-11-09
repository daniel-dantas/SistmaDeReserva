const express = require('express')
const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.post('/create', async (req,res)=>{

    
    await Admin.create({
        userName: req.body.userName,
        senha: req.body.senha
    }).then((user)=>{
        let token = jwt.sign({user: user},'sisresapi')
        return res.send({token: token})
    }).catch((erro)=>{
        return res.send(false)
    })

})

router.post('/search',async (req,res)=>{
    await Admin.findOne({where: {userName: req.body.userName}, attributes: ['userName']}).then(user => {
       return res.send(user)
   }).catch(()=>{return res.send(false)})
})

router.post('/delete', async (req,res)=>{
    await Admin.destroy({
        where: {userName: req.body.userName}
    }).then(()=>{
        return res.send(true)
    }).catch((error)=>{
        return res.send(false)
    })
})

router.post('/update', (req,res)=>{
    Admin.update({senha: req.body.senha}, {where: {userName: req.body.userName}}).then((user)=>{
        return res.send(true)
    }).catch(()=>{return res.send(false)})
})


router.post('/auth', (req,res)=>{
    Admin.findOne({where: {userName: req.body.userName}}).then(user => {
        
        if(user.senha == req.body.senha){
            let token = jwt.sign({user: user}, 'sisresapi')
            return res.send({token: token})
        }else{
            return res.send(false)
        }

        
    }).catch(()=>{return res.send(false)})
})

module.exports = router