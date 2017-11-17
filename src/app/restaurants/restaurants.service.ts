// sera necessário adicionar uma injecao de dependencia, pois vamos usar o HTTP
import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Restaurant}  from './restaurant/restaurant.model'
import {MEAT_API} from '../app.api'
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'


@Injectable()
export class RestaurantsService {

    constructor(private http: HttpClient) {}

    restaurants(search?: string): Observable<Restaurant[]> {
      let params: HttpParams = undefined
      if (search) {
        params = new HttpParams().append('q', search)
      }
      return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})
    }

    restaurantsById(id: string): Observable<Restaurant> {
      return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)

    }

    reviewsOfRestaurant(id: string): Observable<any> {
      return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
      return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }

}


/*
@Injectable()
export class RestaurantsService {

    // tslint:disable-next-line:one-line
    constructor(private http: HttpClient){    }
    restaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams = undefined
        if(search){
            params = new HttpParams().set('q', search) // params é imutável e adicionado uma copia
        }
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurantss`, {params: params})
    }
    restaurantsById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }

     reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)

    }

     menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
        // .map(response => response.json())
        //    .catch(ErrorHandler.handlerError)
    }
}*/
