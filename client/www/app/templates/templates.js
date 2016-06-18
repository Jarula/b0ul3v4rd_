this["__templates"] = this["__templates"] || {};
this["__templates"]["boulevard"] = this["__templates"]["boulevard"] || {};
this["__templates"]["boulevard"]["film"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"film\">\n    <div class=\"film-title\"></div>\n    <div class=\"film-description\"></div>\n    <div class=\"col s12 m7\">\n        <div class=\"card card-film\">\n            <div class=\"card-image\">\n                <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.node : depth0)) != null ? stack1.imagen : stack1), depth0))
    + "\" height=\"200\">\n            </div>\n            <div class=\"card-content\">\n                <h4>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.node : depth0)) != null ? stack1['título'] : stack1), depth0))
    + "</h4>\n                <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.node : depth0)) != null ? stack1.summary : stack1), depth0))
    + "</p>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
this["__templates"]["boulevard"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header role=\"banner\">\n    <nav role=\"navigation\" class=\"blue darken-4\">\n        <div class=\"nav-wrapper container\">\n            <a id=\"logo-container\" href=\"#\" class=\"brand-logo\">\n                <img src=\"./app/imgs/logo-boulevard.png\" alt=\"Logo Boulevard\">\n            </a>\n            <!-- <i class=\"filter-icon material-icons\">call_split</i> -->\n            <ul class=\"right hide-on-med-and-down\">\n                <li><a href=\"#\">Link 1</a></li>\n                <li><a href=\"#\">Link 2</a></li>\n                <li><a href=\"#\">Link 3</a></li>\n            </ul>\n            <ul id=\"nav-mobile\" class=\"side-nav\" style=\"left: -250px;\">\n                <li><a href=\"#\" data-js=\"promociones\">Promociones</a></li>\n                <li><a href=\"#\" data-js=\"locales\">Locales</a></li>\n                <li><a href=\"#\" data-js=\"cine\">Cine</a></li>\n            </ul>\n            <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\">\n                <i class=\"material-icons\">menu</i>\n            </a>\n            <a href=\"#\" class=\"button-arrow el-hide\">\n                <i class=\"arrow-icon\">arrow_back</i>\n            </a>\n            <a href=\"#\" class=\"search-icon\"><i class=\"material-icons\">search</i></a>\n        </div>\n    </nav>\n\n    <nav class=\"search-container el-hide\">\n        <div class=\"nav-wrapper\">\n            <form>\n                <div class=\"input-field\">\n                    <input id=\"search\" type=\"search\" data-js=\"search\" required>\n                    <label for=\"search\"><i class=\"material-icons\">search</i></label>\n                    <i class=\"material-icons\" data-js=\"close-icon\">close</i>\n                </div>\n            </form>\n        </div>\n    </nav>\n</header>";
},"useData":true});
this["__templates"]["boulevard"]["local"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"local\">\n    <div class=\"local-title\"></div>\n    <div class=\"local-description\"></div>\n    <div class=\"col s12 m7\">\n        <div class=\"card\">\n            <div class=\"card-image\">\n                <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\" height=\"200\">\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
this["__templates"]["boulevard"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header data-js=\"header\">Header</header>\n<div data-js=\"promos\">\n	<li class=\"sk-circle selected\">\n		<div class=\"sk-circle1 sk-child\"></div>\n		<div class=\"sk-circle2 sk-child\"></div>\n		<div class=\"sk-circle3 sk-child\"></div>\n		<div class=\"sk-circle4 sk-child\"></div>\n		<div class=\"sk-circle5 sk-child\"></div>\n		<div class=\"sk-circle6 sk-child\"></div>\n		<div class=\"sk-circle7 sk-child\"></div>\n		<div class=\"sk-circle8 sk-child\"></div>\n		<div class=\"sk-circle9 sk-child\"></div>\n		<div class=\"sk-circle10 sk-child\"></div>\n		<div class=\"sk-circle11 sk-child\"></div>\n		<div class=\"sk-circle12 sk-child\"></div>\n	</li>\n</div>";
},"useData":true});
this["__templates"]["boulevard"]["promo"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"promotion\">\n    <div class=\"promo-title\"></div>\n    <div class=\"promo-description\"></div>\n    <div class=\"col s12 m7\">\n        <div class=\"card\">\n            <div class=\"card-image\">\n                <img src=\""
    + alias3(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\" height=\"200\">\n            </div>\n            <div class=\"card-content\">\n                <h4>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n                <p>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});