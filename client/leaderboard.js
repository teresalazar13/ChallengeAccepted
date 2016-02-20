Deps.autorun(function(){
  Meteor.subscribe('userData');
});

Template.leaderboard.helpers({
  users: function() {
    a = Meteor.users.find({}, {sort: {points: -1}});
    for (var i=0; i < a.length; i++ ) {
      var us = a[i];
      var place = i + 1;
      console.log(place);
      Meteor.call("add_rank",us,place);
    }
    return a;
  }
});
