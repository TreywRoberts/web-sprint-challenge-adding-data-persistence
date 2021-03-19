// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');
const router = express.Router()
router.get('/', (req, res, next)=>{
    Resources.getResource()
        .then(resources=>{
            res.status(200).json(resources)
        })
        .catch(next)
})


router.post('/', (req, res, next)=>{
    newResource = req.body
    Resources.createResource(newResource)
        .then(project=>{
            res.status(201).json(project)
        })
        .catch(next)
})


module.exports = router