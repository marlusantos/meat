import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

// inscrever o componente no servico
import {NotificationService} from '../notification.service'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden',style({
        opacity: 0,
        bottom: '0px' // ou 0
      })),
      state('visible',style({
        opacity: 1,
        bottom: '30px'

      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),

      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])

  ]
})
export class SnackbarComponent implements OnInit {

  snackVisibility = 'hidden'
  message = 'Hello ther!'
  // para se inscrever declara no construtor e inicializa no ngOnInit
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    // para se inscrever no servico 
    this.notificationService.notifier
      .do(message=>{
      this.message = message
      this.snackVisibility = 'visible'
      // troca os eventos (o observable e ainda faz o unsubscribe quando existe varios pedidos no mesmo subscribe)
    }).switchMap(message=> Observable.timer(3000)) // troca o Observable inteiro, nao tera timer concorrentes
    .subscribe(timer=> this.snackVisibility = 'hidden')
  }




}
