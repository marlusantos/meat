var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
// para usar reacforms
import { FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from'; // um evento para cada item do array
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
var RestaurantsComponent = (function () {
    // declarando servico no construtor
    function RestaurantsComponent(restaurantService, fb) {
        this.restaurantService = restaurantService;
        this.fb = fb;
        this.searchBarState = 'hidden';
    }
    RestaurantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // mellhor iniciar aqui o servico, pegando os dados do servico
        // para reactforms -->
        this.searchControl = this.fb.control('');
        this.searchForm = this.fb.group({
            searchControl: this.searchControl
        });
        this.searchControl.valueChanges
            .debounceTime(500) // espera por 500ms
            .distinctUntilChanged() // diferencia uma consulta
            .switchMap(function (searchTerm) {
            return _this.restaurantService
                .restaurants(searchTerm)
                .catch(function (error) { return Observable.from([]); });
        }) // para nao quebrar o valueChanges
            .subscribe(function (restaurants) { return _this.restaurants = restaurants; });
        // <--
        // chamando o metodo do servico responsavel pela coleta de dados e atribuindo na variavel do componente
        // o que receber do subscribe será passado para variavel restaurants
        this.restaurantService.restaurants().subscribe(function (restaurants) { return _this.restaurants = restaurants; });
        // lembre-se de avisar ao angular sobre o seu servico criado, para isso adicione o provider no app.module.ts
    };
    RestaurantsComponent.prototype.toggleSearch = function () {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    };
    RestaurantsComponent = __decorate([
        Component({
            selector: 'mt-restaurants',
            templateUrl: './restaurants.component.html',
            animations: [
                trigger('toggleSearch', [
                    state('hidden', style({
                        opacity: 0,
                        'max-height': '0px'
                    })),
                    state('visible', style({
                        opacity: 1,
                        'max-height': '70px',
                        'margin-top': '20px'
                    })),
                    transition('* => *', animate('250ms 0s ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [RestaurantsService,
            FormBuilder])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());
export { RestaurantsComponent };
//# sourceMappingURL=restaurants.component.js.map