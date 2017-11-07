var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output } from '@angular/core';
// para fazer a animacao
import { trigger, state, style, transition, animate } from '@angular/animations';
var MenuItemComponent = (function () {
    function MenuItemComponent() {
        this.menuItemState = 'ready';
        this.add = new EventEmitter();
    }
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    MenuItemComponent.prototype.emitAddEvent = function () {
        this.add.emit(this.menuItem);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "menuItem", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "add", void 0);
    MenuItemComponent = __decorate([
        Component({
            selector: 'mt-menu-item',
            templateUrl: './menu-item.component.html',
            animations: [
                // trigger vai ser o nome da animacao e depois vem um array com os state
                trigger('menuItemAppeared', [
                    state('ready', style({ opacity: 1 })),
                    // void nao vai estar na arvore de componentes
                    transition('void => ready', [
                        style({ opacity: 0, transform: 'translateY(-20px)' }),
                        animate('300ms 0s ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MenuItemComponent);
    return MenuItemComponent;
}());
export { MenuItemComponent };
//# sourceMappingURL=menu-item.component.js.map