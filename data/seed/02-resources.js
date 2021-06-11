exports.seed = function(knex) {
  
    return knex('resources').insert([
      {
        resource_id: 1,
        resource_name: 'resource1',
        resource_description:"filler resource1"},
      {
        resource_id: 2,
        resource_name: 'resource2',
        resource_description:"filler resource2"},
    ]);
  
  };