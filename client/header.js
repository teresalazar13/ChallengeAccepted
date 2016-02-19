Template.header.helpers({
  myHelper:function(){
    var a = Router.current().route.path(this);
    return a.slice(1);
  }
});

Template.header.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});
