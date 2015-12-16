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
                promosCollectionCached,
                localesCollection,
                localesCollectionView,
                localesCollectionCached;

            headerView = new Views.Header();
            this.headerRegion.show(headerView);

            promosCollection = new App.Boulevard.Collections.Promos();
            promosFetch = function(promosCollection) {
                var that = this;
                promosCollection.fetch({
                    cache: true,
                    expires: 600000,
                    'success': function(collection, response, options) {
                        console.log("success promos -> ", promosCollection);
                        collection.trigger('fetched');
                        promosCollectionCached = collection.clone();
                    },
                    'error': function(collection, response, options) {
                        console.log("error promos -> ", promosCollection);
                        promosFetch(promosCollection);
                    }
                });
            };
            promosFetch(promosCollection);

            promosCollection.on('fetched', function() {
                promosCollectionView = new Views.Promos({
                    collection: promosCollection
                });
                that.promosRegion.show(promosCollectionView);
            });

            localesCollection = new App.Boulevard.Collections.Locales();
            localesFetch = function(localesCollection) {
                var that = this;
                localesCollection.fetch({
                    cache: true,
                    expires: 600000,
                    'success': function(collection, response, options) {
                        console.log("success locales -> ", localesCollection);
                        collection.trigger('Locales:fetched');
                        localesCollectionCached = collection.clone();
                    },
                    'error': function(collection, response, options) {
                        console.log("error locales -> ", localesCollection);
                        localesFetch(localesCollection);
                    }
                });
            };
            localesFetch(localesCollection);

            localesCollection.on('Locales:fetched', function() {
                localesCollectionView = new Views.Locales({
                    collection: localesCollection
                });
            });

            App.Events.on('showPromotion', function(modelId) {
                that.showPromotion(modelId, promosCollection);
            });

            App.Events.on('showLocal', function(modelId) {
                that.showLocal(modelId, localesCollection);
            });

            App.Events.on('showPromotionsList', function() {
                that.showPromotionsList(promosCollection, promosCollectionCached, promosCollectionView);
            });

            App.Events.on('showLocalesList', function() {
                that.showLocalesList(localesCollection, localesCollectionCached, localesCollectionView);
            });
        },

        showPromotionsList: function(promosCollection, promosCollectionCached, promosCollectionView) {
            promosCollection.reset(promosCollectionCached.models);

            if (promosCollectionView.isDestroyed) {
                promosCollectionView = new Views.Promos({
                    collection: promosCollection
                });
            }
            this.promosRegion.show(promosCollectionView);
        },

        showLocalesList: function(localesCollection, localesCollectionCached, localesCollectionView) {
            localesCollection.reset(localesCollectionCached.models);

            if (localesCollectionView.isDestroyed) {
                localesCollectionView = new Views.Locales({
                    collection: localesCollection
                });
            }
            this.promosRegion.show(localesCollectionView);
        },

        showPromotion: function(modelId, promosCollection) {
            console.log("modelId -> ", modelId);
            promosCollection.reset(promosCollection.filter(function(model) {
                return model.get('id') === modelId;
            }));

            App.Events.trigger('Header:Promo');
            App.Events.trigger('Promo:Single');
        },

        showLocal: function(modelTitle, localesCollection) {
            localesCollection.reset(localesCollection.filter(function(model) {
                // cambiar title por id
                return model.get('title') === modelTitle;
            }));

            App.Events.trigger('Header:Local');
        }

    });
});