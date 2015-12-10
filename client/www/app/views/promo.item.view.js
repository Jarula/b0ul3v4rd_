// 'use strict';

App.module('Boulevard.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.Promo = Marionette.ItemView.extend({

        tagName: 'li',

        className: 'row',

        template: __templates.boulevard.promo,

        ui: {
            promotion: '.promotion'
        },

        events: {
            'click @ui.promotion': 'showPromotion'
        },

        showPromotion: function() {
            // Backbone.history.navigate('promotionsList/' + this.model.id, {trigger:true});
            App.Events.trigger('showPromotion', this.model.id);
        }
    });
});