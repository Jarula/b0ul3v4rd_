App.module('Boulevard', function (Boulevard, App, Backbone, Marionette, $, _) {
    var controller,
        Router;

    Router = Marionette.AppRouter.extend({
        'appRoutes': {
            '': 'index',
            'promotionsList': 'promotionsList',
            'promotionsList/:id': 'showPromotion'
        }
    });

    controller = {
        index: function() {
            var mainLayoutView;

            mainLayoutView = new Boulevard.Views.Main();
            App.mainRegion.show(mainLayoutView);
        },

        promotionsList: function() {},

        showPromotion: function() {}
    };

    App.onStart = function() {
        new Router({
            controller: controller
        });
    };
});