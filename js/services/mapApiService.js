var module = angular.module("angularMap");

module.service("mapApiService", function() {

	this.getGoogleLayer = function(extraOptions) {
		extraOptions = extraOptions || {};
		return L.gridLayer.googleMutant(extraOptions);
	}

	this.getOpenStreetMapLayer = function(extraOptions) {
		sufix = extraOptions? "." + extraOptions: "";
		return L.tileLayer.provider("OpenStreetMap" + sufix);
	}

});