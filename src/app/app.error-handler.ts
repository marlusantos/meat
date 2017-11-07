import { HttpErrorResponse } from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'
export class ErrorHandler {
    static handlerError(error: HttpErrorResponse | any) {
        let errorMessage: string
        if (error instanceof HttpErrorResponse){
             // const body = error.json() || ''
             const body = error.error // já é body da resposta em json
           // const err = body.error || JSON.stringify(body)
         //   errorMessage = `Erro ${error.status} ao obter a url ${error.url} - ${error.statusText}`
            errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
        }else{
            errorMessage = error.message ? error.message : error.toString()
            errorMessage = error.toString()
        }
        console.log(errorMessage)
        return Observable.throw(errorMessage);

    }

}