// 'use strict';

App.module('Boulevard.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.Header = Marionette.ItemView.extend({

        template: __templates.boulevard.header,

        ui: {
            menu: '.button-collapse',
            back: '.button-arrow',
            promociones: '[data-js="promociones"]',
            locales: '[data-js="locales"]',
            cine: '[data-js="cine"]',
            searchIcon: '.search-icon',
            search: '[data-js="search"]',
            closeIcon: '[data-js="close-icon"]'
        },

        events: {
            'click @ui.menu': 'openMenu',
            'click @ui.back': 'showlastList',
            'click @ui.promociones': 'showPromotionsList',
            'click @ui.locales': 'showLocalesList',
            'click @ui.cine': 'showFilmsList',
            'click @ui.searchIcon': 'searchFocus',
            'keyup @ui.search': 'searchFilter',
            'click @ui.closeIcon': 'searchClose'
        },

        onRender: function() {
            var that = this;

            // arreglar esto para no tener que usar un timeout
            setTimeout(function(){
                that.ui.menu.sideNav();
            }, 100);

            App.Events.on('Header:Promo', function() {
                that.showBackButton(that.showPromotionsList);
            });

            App.Events.on('Header:Local', function() {
                that.showBackButton(that.showLocalesList);
            });
        },

        openMenu: function() {
            navigator.vibrate([10]);
        },

        showPromotionsList: function() {
            navigator.vibrate([10]);
            App.Events.trigger('showPromotionsList');
            this.ui.menu.sideNav('hide');
            this.showMenuButton();
        },

        showLocalesList: function() {
            navigator.vibrate([10]);
            App.Events.trigger('showLocalesList');
            this.ui.menu.sideNav('hide');
            this.showMenuButton();
        },

        showFilmsList: function() {
            navigator.vibrate([10]);
            App.Events.trigger('showFilmsList');
            this.ui.menu.sideNav('hide');
            this.showMenuButton();
        },

        showBackButton: function(lastList) {
            this.ui.menu.hide();
            this.ui.back.show();
            this.lastList = lastList;
        },

        showMenuButton: function() {
            this.ui.menu.show();
            this.ui.back.hide();
        },

        showlastList: function() {
            navigator.vibrate([10]);
            this.lastList();
        },

        searchFocus: function(event) {
            var that = this;

            this.ui.search.closest('nav').show();
            this.ui.search.focus();

            this.isSearchBarOpen = true;

            $('body').on('click.search', function(event) {
                setTimeout(function() {
                    if (!$("#search:focus")[0]) {
                        that.ui.search.closest('nav').hide();
                        $('body').unbind('click.search');
                    }
                }, 100);
            });
        },

        searchFilter: function(event) {
            if (App.currentSection === 'Promotions') {
                App.Events.trigger('change:promotionsSearchFilter', event.target.value);
            } else if (App.currentSection === 'Locales') {
                App.Events.trigger('change:localesSearchFilter', event.target.value);
            }
        },

        searchClose: function() {
            this.ui.search.closest('nav').hide();
        }
    });
});