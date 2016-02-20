Router.configure({
    notFoundTemplate: "notFound"
});

Router.route("/", {
  name: "layout",
});

Router.route("/profile", {
  name: "profile",
});
