App.module('Boulevard.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.Main = Marionette.LayoutView.extend({

        template: __templates.boulevard.main,

        regions: {
            'headerRegion' : '[data-js="header"]',
            'promosRegion': '[data-js="promos"]'
        },

        onShow: function(options) {
            var that = this,
                headerView,
                promosCollection,
                promosCollectionView,
                collectionCached;

            headerView = new Views.Header();
            this.headerRegion.show(headerView);

            promosCollection = new App.Boulevard.Collections.Promos();
            promosCollection.fetch({
                cache: true,
                expires: 600000,
                'success': function(collection, response, options){
                    collection.trigger('fetched');
                    collectionCached = collection.clone();
                }
            });

            promosCollection.on('fetched', function() {
                promosCollectionView = new Views.Promos({
                    collection: promosCollection
                });
                that.promosRegion.show(promosCollectionView);
            });

            App.Events.on('showPromotion', function(modelId) {
                that.showPromotion(modelId, promosCollection);
            });

            App.Events.on('showPromotionsList', function() {
                that.showPromotionsList(promosCollection, collectionCached);
            });
        },

        showPromotionsList: function(promosCollection, collectionCached) {
            promosCollection.reset(collectionCached.models);
        },

        showPromotion: function(modelId, promosCollection) {
            promosCollection.reset(promosCollection.filter(function(model) {
                return model.get('id') === modelId;
            }));

            App.Events.trigger('Header:Promo');
        }

    });
});