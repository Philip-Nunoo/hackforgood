// home.js
function completionGuage() {

	var completionData = new Array();
	var infos = Informations.find().fetch();

	$('#completion-gauge').highcharts({
		chart: {
			type: 'spline',
				animation: Highcharts.svg, // don't animate in old IE
				marginRight: 10,
			},
			title: {
				text: 'Check-in Dashboard'
			},
			xAxis: {
				type: 'datetime',
				tickPixelInterval: 100
			},
			yAxis: {
				title: {
					text: 'Number of people checked-In'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +'</b><br/>'+
					Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
					Highcharts.numberFormat(this.y, 2);
				}
			},
			legend: {
				enabled: false
			},
			exporting: {
				enabled: false
			},
			series: [{
				name: 'Time checked - in',
				data: (function() {
					// generate an array of random data

					var data = [];

					infos.forEach(function (info, i) {
						var x = info.createdAt;
						var y = i;

						data.push({
							x: info.createdAt,
							y: i
						});
					});

					return data;
				})()
			}]
		});
}
Template.chartTemplate.rendered = function () {
	this.autorun(function(c){
		console.log('here');
		completionGuage();
	});
};
Template.Home.helpers({
	data: function () {
		return Informations.find().fetch();
	}
});

Template.Home.topGenresChart = function() {	
	var infos = Informations.find().fetch();
	var my_chart = {
		chart: {
			type: 'spline',
				animation: Highcharts.svg, // don't animate in old IE
				marginRight: 10,
			},
			title: {
				text: 'Check-in Dashboard'
			},
			xAxis: {
				type: 'datetime',
				tickPixelInterval: 100
			},
			yAxis: {
				title: {
					text: 'Number of people checked-In'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +'</b><br/>'+
					Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
					Highcharts.numberFormat(this.y, 2);
				}
			},
			legend: {
				enabled: false
			},
			exporting: {
				enabled: false
			},
			series: [{
				name: 'Time checked - in',
				data: (function() {
					// generate an array of random data

					var data = [];

					infos.forEach(function (info, i) {
						var x = info.createdAt;
						var y = i;

						data.push({
							x: info.createdAt,
							y: i
						});
					});

					return data;
				})()
			}]
		};

		if ($('#test').highcharts()){
			console.log("hello chart");

			var newSeries = { 
				data: []
			};

			infos.forEach(function (info, i) {
				var x = info.createdAt;
				var y = i;

				newSeries.data.push({
					x: info.createdAt,
					y: i
				});
			});
			my_chart.series.push(newSeries);
			console.log(my_chart);
			
		}
		return my_chart;
	};