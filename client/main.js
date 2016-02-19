Template.main.events({
  'change .myFileInput': function(event, template) {
    var fsFile = new FS.File(event.target.files[0]);
    fsFile.owner = Meteor.userId();
    Images.insert(fsFile, function (err) {
      if (err) throw err;
      //Meteor.call("add_image", fsFile._id);
    });
  }
});
