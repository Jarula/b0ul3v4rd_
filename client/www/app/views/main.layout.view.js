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
                localesCollectionCached,
                filmsCollection,
                filmsCollectionView,
                filmsCollectionCached;

            headerView = new Views.Header();
            this.headerRegion.show(headerView);

            promosCollection = new App.Boulevard.Collections.Promos();
            promosFetch = function(promosCollection) {
                var that = this;
                promosCollection.fetch({
                    cache: true,
                    expires: 600000,
                    'success': function(collection, response, options) {
                        collection.trigger('fetched');
                        promosCollectionCached = collection.clone();
                    },
                    'error': function(collection, response, options) {
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
                        collection.trigger('Locales:fetched');
                        localesCollectionCached = collection.clone();
                    },
                    'error': function(collection, response, options) {
                        localesFetch(localesCollection);
                    }
                });
            };
            localesFetch(localesCollection);

            App.currentSection = 'Promotions';

            localesCollection.on('Locales:fetched', function() {
                localesCollectionView = new Views.Locales({
                    collection: localesCollection
                });
            });

            filmsCollection = new App.Boulevard.Collections.Films();
            filmsFetch = function(filmsCollection) {
                var that = this;
                filmsCollection.fetch({
                    cache: true,
                    expires: 600000,
                    'success': function(collection, response, options) {
                        collection.trigger('Films:fetched');
                        filmsCollectionCached = collection.clone();
                    },
                    'error': function(collection, response, options) {
                        filmsFetch(filmsCollection);
                    }
                });
            };
            filmsFetch(filmsCollection);

            filmsCollection.on('Films:fetched', function() {
                filmsCollectionView = new Views.Films({
                    collection: filmsCollection
                });
            });

            App.Events.on('showPromotion', function(modelId) {
                that.showPromotion(modelId, promosCollection);
            });

            App.Events.on('change:promotionsSearchFilter', function(searchValue) {
                that.promotionsFilterBySearch(searchValue, promosCollection, promosCollectionCached);
            });

            App.Events.on('change:localesSearchFilter', function(searchValue) {
                that.localesFilterBySearch(searchValue, localesCollection, localesCollectionCached);
            });

            // App.Events.on('showLocal', function(modelId) {
            //     that.showLocal(modelId, localesCollection);
            // });

            App.Events.on('showFilm', function(modelId) {
                that.showFilm(modelId, filmsCollection);
            });

            App.Events.on('showPromotionsList', function() {
                that.showPromotionsList(promosCollection, promosCollectionCached, promosCollectionView);
            });

            App.Events.on('showLocalesList', function() {
                that.showLocalesList(localesCollection, localesCollectionCached, localesCollectionView);
            });

            App.Events.on('showFilmsList', function() {
                that.showFilmsList(filmsCollection, filmsCollectionCached, filmsCollectionView);
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

            App.currentSection = 'Promotions';
            $('.search-icon').show();
        },

        showLocalesList: function(localesCollection, localesCollectionCached, localesCollectionView) {
            localesCollection.reset(localesCollectionCached.models);

            if (localesCollectionView.isDestroyed) {
                localesCollectionView = new Views.Locales({
                    collection: localesCollection
                });
            }
            this.promosRegion.show(localesCollectionView);

            App.currentSection = 'Locales';
            $('.search-icon').show();
        },

        showFilmsList: function(filmsCollection, filmsCollectionCached, filmsCollectionView) {
            filmsCollection.reset(filmsCollectionCached.models);

            if (filmsCollectionView.isDestroyed) {
                filmsCollectionView = new Views.Films({
                    collection: filmsCollection
                });
            }
            this.promosRegion.show(filmsCollectionView);

            App.currentSection = 'Films';
            $('.search-icon').hide();
        },

        showPromotion: function(modelId, promosCollection) {
            promosCollection.reset(promosCollection.filter(function(model) {
                return model.get('id') === modelId;
            }));

            App.Events.trigger('Header:Promo');
            App.Events.trigger('Promo:Single');
        },

        // showLocal: function(modelTitle, localesCollection) {
        //     localesCollection.reset(localesCollection.filter(function(model) {
        //         // cambiar title por id
        //         return model.get('title') === modelTitle;
        //     }));

        //     App.Events.trigger('Header:Local');
        // },

        showFilm: function(modelTitle, filmsCollection) {
            filmsCollection.reset(filmsCollection.filter(function(model) {
                // cambiar title por id
                return model.get('title') === modelTitle;
            }));

            App.Events.trigger('Header:Film');
        },

        promotionsFilterBySearch: function(searchValue, promosCollection, promosCollectionCached) {
            promosCollection.reset(promosCollectionCached.models);
            promosCollection.reset(promosCollection.filter(function(model) {
                var modelTitle = model.get('title'),
                    modelTitleLowerCase = modelTitle.toLowerCase(),
                    searchValueLowerCase = searchValue.toLowerCase();

                return modelTitleLowerCase.indexOf(searchValueLowerCase) !== -1;
            }));
        },

        localesFilterBySearch: function(searchValue, localesCollection, localesCollectionCached) {
            localesCollection.reset(localesCollectionCached.models);
            localesCollection.reset(localesCollection.filter(function(model) {
                var modelTitle = model.get('title'),
                    modelTitleLowerCase = modelTitle.toLowerCase(),
                    searchValueLowerCase = searchValue.toLowerCase();

                return modelTitleLowerCase.indexOf(searchValueLowerCase) !== -1;
            }));
        }
    });
});