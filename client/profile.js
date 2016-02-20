Template.profile.helpers({
  myHelper:function(){
    var a = Router.current().route.path(this);
    return a;
  },

  accomps: function() {
    console.log(this._id);
    return Images.find({owner: this._id});
  },
});
