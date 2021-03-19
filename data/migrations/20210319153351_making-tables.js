
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbls =>{
        tbls.increments('project_id')
        tbls.text('project_name').notNullable()
        tbls.text('projects_description')
        tbls.integer('project_completed').default(0)
    })
    .createTable('resources', tbls =>{
        tbls.increments('resource_id')
        tbls.text('resource_name').unique().notNullable()
        tbls.text('resource_description')
    })
    .createTable('tasks', tbls =>{
        tbls.increments('task_id')
        tbls.text('task_description').notNullable()
        tbls.text('task_notes', 128)
        tbls.integer('task_completed').default(0)
        tbls.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')

    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
