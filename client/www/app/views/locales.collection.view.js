App.module('Boulevard.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.Locales = Marionette.CollectionView.extend({

        tagName: 'ul',

        className: 'cards-container',

        childView: Views.Local

    });

});