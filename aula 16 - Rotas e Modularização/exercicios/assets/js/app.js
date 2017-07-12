angular.module('BeMEAN', ['ngAnimate', 'ngMessages', 'ngRoute', 'Professor'])
		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
			$locationProvider.html5Mode(true);
			$routeProvider
			.when('/index', {
				templateUrl:'../../views/default.html'
			})
			.otherwise({
				redirectTo: '/index'
			})
		}])

		