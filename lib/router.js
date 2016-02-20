Router.configure({
    notFoundTemplate: "notFound"
});

Router.route("/", {
  name: "layout",
});

Router.route("/user/:username", {
  name: "profile",
  data:function(){
    return Meteor.users.findOne({username: this.params.username});
  }
});

Router.route("/leaderboard", {
  name: "leaderboard",
});
