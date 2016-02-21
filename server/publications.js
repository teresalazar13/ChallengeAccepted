//Meteor.publish("images", function(){ return Images.find(); });

Meteor.publish('userData', function() {
  return Meteor.users.find({}, {fields: {"username" :true,  _id: true, "points":true, "rank":true, "image":true}});
});

Meteor.publish("challenges", function() { return Challenges.find({}, {sort: {createdAt: -1}}); });
