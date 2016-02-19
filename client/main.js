Meteor.subscribe("challenges");

Template.main.helpers({
  images_of_user: function() {
    return Images.find({"owner": Meteor.userId()});
  },

  challenges_of_user: function() {
    return Challenges.find({"owner": Meteor.userId()});
  },
});

Template.main.events({
  'change .myFileInput': function(event, template) {
    var fsFile = new FS.File(event.target.files[0]);
    fsFile.owner = Meteor.userId();
    Images.insert(fsFile, function (err) {
      if (err) throw err;
      //Meteor.call("add_image", fsFile._id);
    });
  },

  'submit form': function(e) {
    var title = $(e.target).find('[name=title]').val();
    var rating = $('#rating').data('userrating');
    Meteor.call("add_challenge", title,rating);
  },
});
