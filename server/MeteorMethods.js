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

  add_points: function(rate) {
    Meteor.users.update(Meteor.userId(), {$inc: {points: rate}});
  },

  add_rank: function(us, place) {
    Meteor.users.update(us, {$set: {rank: place}});
  }
});
