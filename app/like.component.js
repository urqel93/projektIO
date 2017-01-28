"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var LikeComponent = (function () {
    function LikeComponent() {
        this.numberOfLikes = 0;
        this.isLiked = false;
        this.change = new core_1.EventEmitter;
    }
    LikeComponent.prototype.onClick = function () {
        this.isLiked = !this.isLiked;
        this.change.emit({ newValue: this.isLiked });
        this.numberOfLikes += this.isLiked ? 1 : -1;
    };
    return LikeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LikeComponent.prototype, "numberOfLikes", void 0);
__decorate([
    core_1.Input('is-liked'),
    __metadata("design:type", Object)
], LikeComponent.prototype, "isLiked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LikeComponent.prototype, "change", void 0);
LikeComponent = __decorate([
    core_1.Component({
        selector: 'like',
        templateUrl: 'app/like.template.html',
        styles: ["\n     .no-like{\n        color: #ccc\n        }\n        \n     .like{\n        color: deeppink;\n            }\n"]
    })
], LikeComponent);
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map