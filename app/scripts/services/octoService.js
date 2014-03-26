define(['angular','breeze','services/services'], function(angular,breeze,services){
	'use strict';
	
	services.factory('Octo',['$resource', 
	function($resource){
		return $resource('app/octos/:octoId.json',{},{
			query:{method: 'GET', params: {octoId:'octos'}, isArray:true}
		});
	}]);

});