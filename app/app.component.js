"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.post = {
            numberOfLikes: 10,
            isFavorite: true,
            isLiked: false
        };
        this.vote = {
            voteCount: 10,
        };
    }
    AppComponent.prototype.onLikedChange = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.onFavoriteChange = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.onVote = function ($event) {
        console.log($event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <favorite [is-favorite]=\"post.isFavorite\"\n     (change)=\"onFavoriteChange($event)\"></favorite>\n     <like [is-liked]=\"post.isLiked\" [numberOfLikes]=\"post.numberOfLikes\"\n     (change)=\"onLikedChange($event)\"></like>\n     <vote (vote)=\"onVote($event)\" [voteCount]=\"vote.voteCount\"></vote>\n    <twitter></twitter>        "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map