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
  },

  is_page: function() {
    return this._id === Meteor.userId();
  },

  isnt_owner: function() {
    return Meteor.userId() !== this.owner;
  },

  check: function() {
    if (Meteor.users.find({"_id":this._id}).image !== null) {
      return Meteor.users.find({"_id":this._id}).image;
    }
  },

  dif: function() {
    if (this.rate !== null) {
      return this.rate;
    }
    else {
      return "Easy Peasy lemon squezy";
    }
  }
});

Template.profile.events({
  'click #delete': function() {
    Meteor.call("delete_image", this._id);
  },

  'click #delete2': function() {
    Meteor.call("delete_challenge", this._id);
  },

  'change .myFileInput': function(event, template) {
    var fsFile = new FS.File(event.target.files[0]);
    fsFile.owner = Meteor.userId();
    Images.insert(fsFile, function (err) {
      if (err) throw err;
      Meteor.call("add_image", fsFile._id);
    });
    Router.go("/");
  },
});
