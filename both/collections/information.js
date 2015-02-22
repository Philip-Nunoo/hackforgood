Informations = new Mongo.Collection('informations');

Informations.attachSchema(new SimpleSchema({
	checkInTime: {
		type: String,
		label: "Time of CheckIn",
		max: 300
	},
	studentId: {
		type: String,
		label: "Id of student",
	},
	createdAt: {
		type: Date,
		autoValue: function() {
			if (this.isInsert) {
				return new Date;
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date};
			} else {
				this.unset();
			}
		}
	}
}));