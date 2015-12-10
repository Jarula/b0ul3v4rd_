App.module('Boulevard.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.Local = Marionette.ItemView.extend({

        tagName: 'li',

        className: 'row',

        template: __templates.boulevard.local,

        ui: {
            local: '.local'
        },

        events: {
            'click @ui.local': 'showLocal'
        },

        showLocal: function() {
            // cambiar title por id
            App.Events.trigger('showLocal', this.model.get('title'));
        }
    });
});