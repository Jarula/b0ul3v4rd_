// 'use strict';

App.module('Boulevard.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.Header = Marionette.ItemView.extend({

        template: __templates.boulevard.header,

        ui: {
            menu: '.button-collapse',
            back: '.button-arrow'
        },

        events: {
            'click @ui.back': 'showPromotionsList'
        },

        onRender: function() {
            var that = this;

            // arreglar esto para no tener que usar un timeout
            setTimeout(function(){
                that.ui.menu.sideNav();
            }, 100);

            App.Events.on('Header:Promo', function() {
                that.showBackButton();
            });
        },

        showPromotionsList: function() {
            App.Events.trigger('showPromotionsList');
            this.showMenuButton();
        },

        showBackButton: function() {
            this.ui.menu.hide();
            this.ui.back.show();
        },

        showMenuButton: function() {
            this.ui.menu.show();
            this.ui.back.hide();
        }

    });
});