//Meteor.publish("images", function(){ return Images.find(); });

Meteor.publish('userData', function() {
  return Meteor.users.find(this.userId, {}, {fields: {"username" :true,  _id: true, "points":true}});

});

//Meteor.publish("challenges", function() { return Challenges.find({}, {sort: {date: -1}}); });
