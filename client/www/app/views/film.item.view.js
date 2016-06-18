App.module('Boulevard.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.Film = Marionette.ItemView.extend({

        tagName: 'li',

        className: 'row',

        template: __templates.boulevard.film,

        ui: {
            film: '.film'
        },

        events: {
            'click @ui.film': 'showFilm'
        },

        initialize: function() {
            var that = this;
            App.Events.on('Film:Single', function() {
                $(that.ui.film).addClass('film-individual');
                $(that.ui.film).removeClass('film');
            });
        },

        showFilm: function() {
            navigator.vibrate([10]);
            // cambiar title por id
            var node = this.model.get('node');
            App.Events.trigger('showFilm', node.imagen);
        }
    });
});