Router.configure({
    notFoundTemplate: "notFound"
});

Router.route("/", {
  name: "layout",
});

Router.route("/:username", {
  name: "profile",
  data:function(){
    return Meteor.users.findOne({username: this.params.username});
  }
});
