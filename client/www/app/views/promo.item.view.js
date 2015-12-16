App.module('Boulevard.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.Promo = Marionette.ItemView.extend({

        tagName: 'li',

        className: 'row',

        template: __templates.boulevard.promo,

        ui: {
            promotion: '.promotion',
            promotionIndividual: 'promotion-individual'
        },

        events: {
            'click @ui.promotion': 'showPromotion'
        },

        initialize: function() {
            var that = this;
            App.Events.on('Promo:Single', function() {
                console.log("*** Promo:Single");
                console.log("that.ui.promotion -> ", that.ui.promotion);
                window.test = that.ui;
                $(that.ui.promotion).addClass('promotion-individual');
                $(that.ui.promotion).removeClass('promotion');
            });
        },

        showPromotion: function() {
            navigator.vibrate([10]);
            App.Events.trigger('showPromotion', this.model.id);
        }
    });
});