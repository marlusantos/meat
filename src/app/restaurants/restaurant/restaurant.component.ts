import { Component, OnInit, Input } from '@angular/core';
import {Restaurant} from './restaurant.model'
// para fazer a animacao
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  animations: [
    // trigger vai ser o nome da animacao e depois vem um array com os state
    trigger('restaurantAppeared', [
      state('ready', style({opacity: 1})),
      // void nao vai estar na arvore de componentes
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  restaurantState= 'ready'

   // para este componete poder receber algum atributo (valor) de outro
  // componente precisa do decorator input
  @Input() restaurant: Restaurant
  constructor() { }

  ngOnInit() {
  }

}
