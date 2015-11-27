App.module('Boulevard.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.Main = Marionette.LayoutView.extend({

        template: __templates.boulevard.main,

        regions: {
            'headerRegion' : '[data-js="header"]',
            'promosRegion': '[data-js="promos"]'
        },

        events: {},

        onShow: function(options) {
            var that = this,
                headerView,
                promo,
                promosCollection,
                promosCollectionView,
                totalView;

            headerView = new Views.Header();
            this.headerRegion.show(headerView);

            promo = new App.Boulevard.Models.Promo();
            promosCollection = new App.Boulevard.Collections.People(promo);

            promosCollectionView = new Views.Promos({
                collection: promosCollection
            });
            this.promosRegion.show(promosCollectionView);
        }
    });

});