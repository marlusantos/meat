import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel, FormControlName} from '@angular/forms'
@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
// interface AfterContentInit
export class InputComponent implements OnInit, AfterContentInit {
  
// decorator input, pois será informado de fora para dentro do componente
  @Input() label: string
  @Input() errorMessage: string
  input: any
// como paramentro do ContentChild pode ser usado uma diretiva, ou referença a um elemento
// aqui vamos usar uma diretiva
 @ContentChild(NgModel) model: NgModel
 @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }
  // o metodo é chamado assim que o conteudo é definido
  ngAfterContentInit(): void {
    this.input = this.model || this.control // se o ngmodel não estiver disponível pega o React Form usando o control
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou FormControlName')

    }
  }
  hasSuccess(): boolean{
  return this.input.valid && (this.input.dirty || this.input.touched)
  }
  hasError(): boolean{
  return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
