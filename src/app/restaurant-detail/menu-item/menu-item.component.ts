import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {MenuItem} from './menu-item.model'
// para fazer a animacao
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html', 
  animations: [
    // trigger vai ser o nome da animacao e depois vem um array com os state
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      // void nao vai estar na arvore de componentes
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

 menuItemState = 'ready'
 @Input() menuItem: MenuItem
 @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem)
  }

}
