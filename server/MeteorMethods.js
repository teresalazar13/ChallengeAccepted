Meteor.methods({
  add_challenge: function(title) {
    Challenges.insert({
      title: title,
      createdAt: new Date(),
      owner: Meteor.userId(),
    });
  },
});
