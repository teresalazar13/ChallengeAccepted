Meteor.subscribe("challenges");

Template.main.helpers({
  images_of_user: function() {
    return Images.find({});
  },

  challenges_of_user: function() {
    return Challenges.find({});
  },
});

Template.main.events({
  'change .myFileInput': function(event, template) {
    var fsFile = new FS.File(event.target.files[0]);
    fsFile.owner = Meteor.userId();
    var acomp = this.title;
    fsFile.filename = acomp;
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
});
