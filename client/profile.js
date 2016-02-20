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
  }
});
