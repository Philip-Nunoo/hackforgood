// router.js
Router.configure({ 
	layoutTemplate: 'Layout'
});

Router.route('/', function () {
	this.layout('HomeLayout');
	this.render('Home');
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