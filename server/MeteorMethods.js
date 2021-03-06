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

  add_rank: function(user, position) {
    Meteor.users.update(user, {$set: {rank: position}});
  },

  delete_image: function(id, image) {
    if (Meteor.userId() == Images.findOne({_id: id}).owner) {
      var points = Images.findOne({_id: id}).rate;
      Meteor.users.update(Meteor.userId(), {$inc: {points: -points}});
      Images.remove(id);
    }
  },

  delete_challenge: function(id) {
    if (Meteor.userId() == Challenges.findOne({_id: id}).owner)
      Challenges.remove(id);
  },

  add_image: function(id) {
    Meteor.users.update(Meteor.userId(), {$set: {image: "/images/" + id}});
  }
});
