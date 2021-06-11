exports.seed = function(knex) {
  
    return knex('tasks').insert([
      {
        task_id: 1,
        task_description: 'filler task 1',
        task_notes:"filler note",
        task_completed:0,
        project_id:1
      },
      {
        task_id: 2,
        task_description: 'filler task 2',
        task_notes:"filler note!",
        task_completed:0,
        project_id:2
      }
    ]);
  
  };