// build your `Task` model here
const db = require('./../../data/dbConfig')

const getTask = ()=>{
    return db('tasks')
}

const createTask = (resource)=>{
    return db('tasks').insert(resource, ['task_description', 'task_notes', 'task_completed', 'project_id'])
}

module.exports = {
    createTask,
    getTask
}