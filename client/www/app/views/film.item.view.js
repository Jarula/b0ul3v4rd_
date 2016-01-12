App.module('Boulevard.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.Film = Marionette.ItemView.extend({

        tagName: 'li',

        className: 'row',

        template: __templates.boulevard.film,

        ui: {
            local: '.film'
        },

        events: {
            'click @ui.film': 'showFilm'
        },

        showFilm: function() {
            navigator.vibrate([10]);
            // cambiar title por id
            App.Events.trigger('showFilm', this.model.get('title'));
        }
    });
});