// router.js
Router.configure({ 
	layoutTemplate: 'Layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', function () {
	this.layout('homeLayout');
	this.render('home');
},{
	name: 'home'
});

Router.route('/dashboard', function(){
	this.render('Dashboard');
},{
	name: 'dashboard'
});

Router.route('/save/info', {where: 'server'})
.get(function () {
	this.response.end('gemt request\n');
})
.post(function () {
	this.response.end('post request\n');
});

Router.route('/all/info', {where: 'server'})
.get(function () {
	this.response.end('get request\n');
});