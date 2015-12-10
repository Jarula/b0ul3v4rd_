this["__templates"] = this["__templates"] || {};
this["__templates"]["boulevard"] = this["__templates"]["boulevard"] || {};
this["__templates"]["boulevard"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header role=\"banner\">\n    <nav role=\"navigation\" class=\"blue darken-4\">\n        <div class=\"nav-wrapper container\">\n            <a id=\"logo-container\" href=\"#\" class=\"brand-logo\"><img src=\"./app/imgs/logo-boulevard.png\" alt=\"Logo Boulevard\"></a>\n            <!-- <i class=\"filter-icon material-icons\">call_split</i> -->\n            <ul class=\"right hide-on-med-and-down\">\n                <li><a href=\"#\">Link 1</a></li>\n                <li><a href=\"#\">Link 2</a></li>\n                <li><a href=\"#\">Link 3</a></li>\n            </ul>\n            <ul id=\"nav-mobile\" class=\"side-nav\" style=\"left: -250px;\">\n                <li><a href=\"#\" data-js=\"promociones\">Promociones</a></li>\n                <li><a href=\"#\" data-js=\"locales\">Locales</a></li>\n                <li><a href=\"#\" data-js=\"cine\">Cine</a></li>\n            </ul>\n            <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\">\n                <i class=\"material-icons\">menu</i>\n            </a>\n            <a href=\"#\" class=\"button-arrow el-hide\">\n                <i class=\"arrow-icon\">arrow_back</i>\n            </a>\n        </div>\n    </nav>\n    <!-- <div class=\"filters blue darken-3\"></div> -->\n</header>";
},"useData":true});
this["__templates"]["boulevard"]["local"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"local\">\n    <div class=\"local-title\"></div>\n    <div class=\"local-description\"></div>\n    <div class=\"col s12 m7\">\n        <div class=\"card\">\n            <div class=\"card-image\">\n                <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\" height=\"200\">\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
this["__templates"]["boulevard"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header data-js=\"header\">Header</header>\n<div data-js=\"promos\">Promos</div>";
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