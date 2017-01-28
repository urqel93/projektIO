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
var AutoGrowDirective = (function () {
    function AutoGrowDirective(el, render) {
        this.el = el;
        this.render = render;
    }
    AutoGrowDirective.prototype.onFocus = function () {
        this.render.setElementStyle(this.el.nativeElement, 'width', '200');
    };
    AutoGrowDirective.prototype.onBlur = function () {
        this.render.setElementStyle(this.el.nativeElement, 'width', '120');
    };
    return AutoGrowDirective;
}());
AutoGrowDirective = __decorate([
    core_1.Directive({
        selector: '[autoGrow]',
        host: {
            '(focus)': 'onFocus()',
            '(blur)': 'onBlur()'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer])
], AutoGrowDirective);
exports.AutoGrowDirective = AutoGrowDirective;
//# sourceMappingURL=auto-grow.directive.js.map