Template.header.helpers({
  username: function() {
    return Meteor.user().username;
  },
  usersIndex: () => UsersIndex,
});

Template.header.events({
  'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
      Router.go("/");
  }
});
