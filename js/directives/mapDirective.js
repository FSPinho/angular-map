angular.module("angularMap").directive("map", function(mapFactory) {

	return {
		template: "<div ng-transclude></div>", 
		replace: true, 
		restrict: "AE",
		transclude: true, 
		scope: {
			tileLayer: "="
		}, 
		controller: function($scope) {
			$scope.map = null;	
		},
		link: function(scope, element, attrs, controller, transcludeFn) {
			scope.map = mapFactory.createMap({
				mapElement: element[0], 
				api: "OpemStreetMap"
			});

			scope.tileLayer.addTo(scope.map)
		} 
	};

});