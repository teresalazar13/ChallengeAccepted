Meteor.methods({
  add_challenge: function(title, rating) {
    Challenges.insert({
      title: title,
      createdAt: new Date(),
      owner: Meteor.userId(),
      rate: rating,
      username: Meteor.users.findOne({"_id": Meteor.userId()}).username,
    });
  },
});
