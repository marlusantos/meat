import { Component, OnInit } from '@angular/core';
import {Restaurant} from './restaurant/restaurant.model'
import {RestaurantsService} from './restaurants.service'
import {trigger, state, style, transition, animate} from '@angular/animations'
// para usar reacforms
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from' // um evento para cada item do array
import {Observable} from 'rxjs/Observable'

import 'rxjs/add/operator/do'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch',[
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'

      })),
      state('visible',style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *',animate('250ms 0s ease-in-out'))
    ])

  ]
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] // está undefine

  searchForm: FormGroup;
  searchControl: FormControl;
  searchBarState = 'hidden'
    // declarando servico no construtor
    constructor(private restaurantService: RestaurantsService,
                private fb: FormBuilder) { }

  ngOnInit() { // faz a inicializacao da aplicacao
    // mellhor iniciar aqui o servico, pegando os dados do servico
    // para reactforms -->
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
    this.searchControl.valueChanges
    .debounceTime(500) // espera por 500ms
    .distinctUntilChanged() // diferencia uma consulta
    .switchMap(searchTerm => 
     this.restaurantService
        .restaurants(searchTerm)
        .catch(error=>Observable.from([]) )) // para nao quebrar o valueChanges
     .subscribe(restaurants => this.restaurants = restaurants)
    // <--
    // chamando o metodo do servico responsavel pela coleta de dados e atribuindo na variavel do componente
    // o que receber do subscribe será passado para variavel restaurants
    this.restaurantService.restaurants().subscribe(restaurants => this.restaurants = restaurants)
    // lembre-se de avisar ao angular sobre o seu servico criado, para isso adicione o provider no app.module.ts

  }

  toggleSearch() {
    this.searchBarState =  this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }
}
