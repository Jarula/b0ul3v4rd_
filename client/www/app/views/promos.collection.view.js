// 'use strict';

App.module('Boulevard.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.Promos = Marionette.CollectionView.extend({

        tagName: 'ul',

        className: 'cards-container',

        childView: Views.Promo

    });

});