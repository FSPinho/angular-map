var module = angular.module("angularMap");

module.factory("mapFactory", function(mapApiService) {

	var _defaultOptions = {
		mapElement: null, 
		position: [-13.5351826, -60.6368989], 
		zoom: 4, 
		api: "google"
	};

	var _createMap = function(options) {

		options = options || {};
		Object.keys(_defaultOptions).map(function(k) {
			options[k] = options[k] || _defaultOptions[k];
		});

		var map = L
					.map(options.mapElement)
					.setView(options.position, options.zoom);

		return map;

	}

	return {
		createMap: _createMap
	};

});