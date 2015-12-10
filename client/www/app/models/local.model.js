App.module('Boulevard.Models', function (Models, App, Backbone, Marionette, $, _) {
    Models.Local = Backbone.Model.extend({
        urlRoot: 'http://50.28.16.26/~jarularest/?q=api/json/store',
        defaults: {
            'id': null,
            'title': null,
            'picture': null,
            'link': null
        }
    });
});