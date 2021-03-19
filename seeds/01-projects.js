
exports.seed = function(knex, Promise) {
 
      return knex('projects').insert([
        {project_name: 'Do Sprint', projects_description: 'Kill it', project_completed: 0},
        
      ]);

};
