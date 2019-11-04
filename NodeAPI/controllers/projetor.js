const express = require('express')
const Projetor = require('../models/Projetor')

const router = express.Router()

router.post('/create', async (req,res)=>{

    
    await Projetor.create(req.body).then(projetor =>{
        return res.send(projetor)
    }).catch((erro)=>{
        return res.send(null)
    })

})

router.post('/search',async (req,res)=>{
    await Projetor.findOne({where: {codigo: req.body.codigo}, attributes: ['codigo', 'observacao']}).then(projetor => {
       return res.send(projetor)
   }).catch(()=>{return res.send(null)})
})

router.post('/delete', async (req,res)=>{
    await Projetor.destroy({
        where: {codigo: req.body.codigo}
    }).then(()=>{
        return res.send(true)
    }).catch((error)=>{
        return res.send(false)
    })
})

router.post('/update', (req,res)=>{
    Projetor.update({observacao: req.body.observacao}, {where: {codigo: req.body.codigo}}).then((projetor)=>{
        return res.send(true)
    }).catch(()=>{return res.send(false)})
})


module.exports = router