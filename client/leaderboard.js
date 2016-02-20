Deps.autorun(function(){
  Meteor.subscribe('userData');
});

Template.leaderboard.helpers({
  users: function() {
    return Meteor.users.find();
  }
});
