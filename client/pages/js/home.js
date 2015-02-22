// home.js
Template.home.helpers({
	data: function () {
		return Informations.find().fetch();
	}
});