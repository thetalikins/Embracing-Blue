
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        { id: 1, user_id: 2, post_id: 1, comment: 'This is where the comment would be. Similar to the posts, only the user who posted the comment or the admin can delete a comment. Anyone can view them.', is_approved: true },
        { id: 2, user_id: 3, post_id: 2, comment: 'This is another comment', is_approved: true },
        { id: 3, user_id: 2, post_id: 1, comment: 'Oh look, another comment', is_approved: false }
      ]);
    });
};
