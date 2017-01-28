"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TwitterComponent = (function () {
    function TwitterComponent() {
        this.post = {
            isLiked: false,
            numberOfLikes: 10
        };
    }
    TwitterComponent.prototype.onLikedChange = function ($event) {
        console.log($event);
    };
    return TwitterComponent;
}());
TwitterComponent = __decorate([
    core_1.Component({
        selector: 'twitter',
        templateUrl: 'app/components/twitter/twitter.template.html',
        styleUrls: ['app/components/twitter/twitter.css']
    })
], TwitterComponent);
exports.TwitterComponent = TwitterComponent;
//# sourceMappingURL=twitter.component.js.map