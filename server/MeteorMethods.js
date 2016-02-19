Meteor.methods({
  add_challenge: function(title, rating) {
    Challenges.insert({
      title: title,
      createdAt: new Date(),
      owner: Meteor.userId(),
      rate: rating,
    });
  },
});
