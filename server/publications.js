Meteor.publish("images", function() {
  return Images.find({}, /*{fields: {"filename":true, _id:true, "rate":true, "owner":true}},*/ {sort: {createdAt: -1}});
});

Meteor.publish('userData', function() {
  return Meteor.users.find({}, {fields: {"username" :true,  _id: true, "points":true, "rank":true, "image":true}});
});

Meteor.publish("challenges", function() {
  return Challenges.find({}, {fields: {"title": true, "rate":true, "username": true, "createdAt":true }}, {sort: {createdAt: -1}});
});
