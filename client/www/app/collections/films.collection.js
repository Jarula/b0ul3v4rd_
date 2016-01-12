App.module('Boulevard.Collections', function (Collections, App, Backbone, Marionette, $, _) {

    Collections.Films = Backbone.Collection.extend({
        model: App.Boulevard.Models.Film,
        url: 'http://www.boulevardshopping.com.ar/api/json/movies',
        parse: function(response){
        	console.log("response -> ", response);
        	window.nico = response;
	        //return only the nested objects that will be our models
	        // return response.component.objects;
	        return response.nodes;
	    }
    });

});