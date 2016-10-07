
var myApp = angular.module('myApplication', ['ngAnimate', 'ngRoute']);




// Configuration des routes
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'public/accueil.html', 
			controller: 'AccueilCtrl'
		})

		.when('/supports/:id', {
			templateUrl: 'public/supports.html', 
			controller: 'SupportsCtrl'
		})

		.otherwise({
			redirectTo: '/'
		})
});