Template.header.helpers({
  username: function() {
    return Meteor.users.findOne({"_id": Meteor.userId()}).username;
  }
});

Template.header.events({
  'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
  }
});
