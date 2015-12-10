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
                collectionCached,
                localesCollection,
                localesCollectionView;

            headerView = new Views.Header();
            this.headerRegion.show(headerView);

            promosCollection = new App.Boulevard.Collections.Promos();
            promosCollection.fetch({
                cache: true,
                expires: 600000,
                'success': function(collection, response, options) {
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

            localesCollection = new App.Boulevard.Collections.Locales();
            localesCollection.fetch({
                cache: true,
                expires: 600000,
                'success': function(collection, response, options) {
                    collection.trigger('Locales:fetched');
                }
            });
            localesCollection.on('Locales:fetched', function() {
                localesCollectionView = new Views.Locales({
                    collection: localesCollection
                });
            });

            App.Events.on('showPromotion', function(modelId) {
                that.showPromotion(modelId, promosCollection);
            });

            App.Events.on('showPromotionsList', function() {
                that.showPromotionsList(promosCollection, collectionCached, promosCollectionView);
            });

            App.Events.on('showLocalesList', function() {
                that.showLocalesList(localesCollection, localesCollectionView);
            });
        },

        showPromotionsList: function(promosCollection, collectionCached, promosCollectionView) {
            console.log("entra showPromotionsList");
            promosCollection.reset(collectionCached.models);

            if (promosCollectionView.isDestroyed) {
                promosCollectionView = new Views.Promos({
                    collection: promosCollection
                });
            }
            this.promosRegion.show(promosCollectionView);
        },

        showLocalesList: function(localesCollection, localesCollectionView) {
            if (localesCollectionView.isDestroyed) {
                localesCollectionView = new Views.Locales({
                    collection: localesCollection
                });
            }
            this.promosRegion.show(localesCollectionView);
        },

        showPromotion: function(modelId, promosCollection) {
            promosCollection.reset(promosCollection.filter(function(model) {
                return model.get('id') === modelId;
            }));

            App.Events.trigger('Header:Promo');
        }

    });
});