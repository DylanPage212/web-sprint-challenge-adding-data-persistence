exports.seed = function(knex) {
  
    return knex('projects').insert([
      {
        project_id: 1,
        project_name: 'project1',
        project_description:"filler project1",
        project_completed:0},
      {
        project_id: 2,
        project_name: 'project2',
        project_description:"filler project2",
        project_completed:1},
    ]);
  
};