App.module('Boulevard.Models', function (Models, App, Backbone, Marionette, $, _) {
    Models.Film = Backbone.Model.extend({
        urlRoot: 'http://www.boulevardshopping.com.ar/api/json/movies',
        defaults: {
        	'node': null
        }
    });
});