Template.profile.helpers({
  myHelper:function(){
    var a = Router.current().route.path(this);
    return a;
  },

  accomps: function() {
    return Images.find({owner: this._id});
  },

  user_challenges: function() {
    return Challenges.find({owner: this._id});
  },

  is_owner: function() {
    return this.owner === Meteor.userId();
  }
});

Template.profile.events({
  'click #delete': function() {
    Meteor.call("delete_image", this._id);
  }
});
