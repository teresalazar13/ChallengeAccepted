Router.configure({
    notFoundTemplate: "notFound"
});

Router.route("/", {
  name: "layout",
  data: function() {
    return Images.find();
  }
});
