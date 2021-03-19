// build your `Resource` model here
const db = require('./../../data/dbConfig')

const getResource = ()=>{
    return db('resources')
}

const createResource = (resource)=>{
    return db('resources').insert(resource, ['resource_name', 'resource_description'])
}

module.exports = {
    createResource,
    getResource
}

