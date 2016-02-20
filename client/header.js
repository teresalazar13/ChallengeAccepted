Template.header.helpers({
  username: function() {
    return Meteor.user().username;
  }
});

Template.header.events({
  'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
      Router.go("/");
  }
});
