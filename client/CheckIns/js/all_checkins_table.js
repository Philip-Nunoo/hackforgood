Template.AllCheckIns_table.helpers({
	data: function() {
		return Informations.find({},{sort: {createdAt: -1}}).fetch();
	}
});