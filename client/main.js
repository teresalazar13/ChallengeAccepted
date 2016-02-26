Meteor.subscribe("challenges");
Meteor.subscribe("users");
Meteor.subscribe("images");

Template.main.helpers({
  challenges_of_user: function() {
    return Challenges.find({}, {sort: {createdAt: -1}});
  },

  isnt_owner: function() {
    return Meteor.userId() !== this.owner;
  },

  dif: function() {
    if (this.rate !== null) {
      return this.rate;
    }
    else {
      return "Easy Peasy lemon squezy";
    }
  },

  image: function() {
    return Meteor.users.findOne({username: this.username}).image;
  }
});

Template.main.events({
  'change .myFileInput': function(event, template) {
    var fsFile = new FS.File(event.target.files[0]);
    fsFile.owner = Meteor.userId();
    var acomp = this.title;
    var rate = this.rate;
    Meteor.call("add_points", rate);
    fsFile.filename = acomp;
    fsFile.rate = rate;
    Images.insert(fsFile, function (err) {
      if (err) throw err;
    });
    Router.go("/");
  },

  'submit form': function(e) {
    var title = $(e.target).find('[name=title]').val();
    var rating = $('#rating').data('userrating');
    Meteor.call("add_challenge", title,rating);
  },

  'click #delete': function() {
    Meteor.call("delete_challenge", this._id);
  }
});
