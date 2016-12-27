angular.module("angularMap").directive("marker", function(mapFactory) {

	return {
		template: "", 
		replace: true, 
		restrict: "AE",
		transclude: false, 
		scope: {
			position: "=", 
			info: "="
		}, 
		require: "^map", 
		link: function(scope, element, attrs, controller, transcludeFn) {
			console.log(scope.$parent.$parent.map);
		} 
	};

});