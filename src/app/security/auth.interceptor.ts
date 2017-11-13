import {HttpInterceptor, HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import { Injectable, Injector } from '@angular/core';

import {LoginService} from './login/login.service'


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    // injector referencia ao mecanismo de injecao, para resolver o problema ciclica de injecao de dependencia
    constructor(private injector: Injector){}
    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
        const loginService = this.injector.get(LoginService)
       if(loginService.isLoggedIn()){
        const authRequest = request.clone( // Chama o clone porq o metodo é imutável, nao consegue alterar sem clonar
            {setHeaders:{'Authorization':`Bearer ${loginService.user.accessToken}`}})
        return next.handle(authRequest)
       }else{
        return next.handle(request)
       }
    }
} 