// 'use strict';

App.module('Boulevard.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.Local = Marionette.ItemView.extend({

        tagName: 'li',

        className: 'row',

        template: __templates.boulevard.local

        // ui: {
        //     promotion: '.local'
        // },

        // events: {
        //     'click @ui.promotion': 'showPromotion'
        // },

        // showPromotion: function() {
        //     App.Events.trigger('showPromotion', this.model.id);
        // }
    });
});