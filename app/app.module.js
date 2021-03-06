"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var courses_component_1 = require("./courses.component");
var authors_component_1 = require("./authors.component");
var author_service_1 = require("./author.service");
var auto_grow_directive_1 = require("./auto-grow.directive");
var favorite_component_1 = require("./favorite.component");
var like_component_1 = require("./like.component");
var vote_component_1 = require("./vote.component");
var twitter_component_1 = require("./components/twitter/twitter.component");
var twitter_service_1 = require("./components/twitter/twitter.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            app_component_1.AppComponent,
            courses_component_1.CoursesComponent,
            authors_component_1.AuthorsComponent,
            auto_grow_directive_1.AutoGrowDirective,
            favorite_component_1.FavoriteComponent,
            like_component_1.LikeComponent,
            vote_component_1.VoteComponent,
            twitter_component_1.TwitterComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            author_service_1.AuthorService,
            twitter_service_1.TwitterService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map