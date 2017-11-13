import {Injectable} from '@angular/core'
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {MEAT_API} from '../app.api'
// import {LoginService} from '../security/login/login.service' // 1

import {Order, OrderItem} from './order.model'


@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, 
                private http: HttpClient,
                // 2
               // private loginService: LoginService
            ) {} 

    itemsValue(): number {
        return this.cartService.total()
    }

    CartItems(): CartItem[]{
        return this.cartService.items
    }
    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }
    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }
    remove(item: CartItem){
        this.cartService.removeItem(item)
    }
    clear(){
        this.cartService.clear()
    }
    checkOrder(order: Order): Observable<string>{
        /*let headers = new HttpHeaders() // metodos set e up
        if(this.loginService.isLoggedIn){
            headers = headers.set('Authorization',`Bearer ${this.loginService.user.accessToken}`)
        }*/
        /*    return this.http.post<Order>(`${MEAT_API}/orders`, order, {headers: headers})
                                        .map(order => order.id)*/
             return this.http.post<Order>(`${MEAT_API}/orders`, order)
                .map(order => order.id)
    }
}