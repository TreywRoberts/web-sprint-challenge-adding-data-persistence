// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');
const router = express.Router()

router.get('/', (req, res , next)=>{
    Projects.getAll()
        .then(projects=>{
            console.log(projects)
            res.status(200).json(projects)
            // res.status(200).json(projects)
        })
        .catch(next)
})

router.get('/:id', (req, res, next)=>{
    const project_id = req.params.id
    Projects.getById(project_id)
        .then(project=>{
            res.status(200).json(project)
        })
        .catch(next)
})

router.post('/', (req, res, next)=>{
    newProject = req.body
    Projects.create(newProject)
        .then(project=>{
            res.status(201).json(project)
        })
        .catch(next)
})




module.exports = router