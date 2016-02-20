Deps.autorun(function(){
  Meteor.subscribe('userData');
});

Template.leaderboard.helpers({
  users: function() {
    var items = Meteor.users.find({}, {sort: {points: -1}}).map(function(doc, index, cursor) {
    var i = _.extend(doc, {index: 1 + index});
    return i;
  });
  return items;
  },
});
