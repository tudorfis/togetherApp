define([], function(){
	return function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl : 'app/modules/home/home.html',
				controller : 'HomeCtrl'
			})
	}
});