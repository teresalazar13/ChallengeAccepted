Challenges = new Mongo.Collection("challenges");

Challenges.allow({
	insert: function(userId, doc) {
		//only allow posting a user that is logged in
		return userId;
	},
	update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.owner === userId;
  },
	remove:function(userId,project){
		return true;
	}
});
