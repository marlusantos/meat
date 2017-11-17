import { BrowserModule } from '@angular/platform-browser';
// para localizacao regional, usar LOCALE_ID
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import {LocationStrategy, HashLocationStrategy} from '@angular/common'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ROUTES} from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'

import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'



import { OrderSummaryComponent } from './order-summary/order-summary.component';
import {SharedModule} from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component'
import { ApplicationErrorHandler } from './app.error-handler'

// PARA usar rotas, deveter ter as rotas (arquivo app.routes), deve configurar no app.modulo e
// por fim precisa configurar a regiao onde será alternada entre as rotas.
//
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // possibilita importar com e sem providers,
    // a exemplo nos componentes do pedido (order) que importa o SharedModule sem os providers (servicos)
    // a funcao forRoot foi criada para retornar além do SharedModule tbm os providers
    // para isso foi usado o ModuleWithProviders importado do angular/core
    SharedModule.forRoot(), // importa todos compartilhados + os servicos
    // CoreModule,
  // FormsModule, pode remover pois está no shared.module
  // ReactiveFormsModule, pode remover pois está no shared.module
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  // Mudando a localizacao para pt-BR
  // toda vez que usar o LOCALE_ID vai mudar para pt-BR
  // USANDO sintaxe extendida, ao contrario da sintaxe do RestaurantService que está reduzida
  providers: [ {provide: LOCALE_ID, useValue: 'pt-BR'},
      {provide: ErrorHandler, useClass: ApplicationErrorHandler}],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, {provide: LOCALE_ID, useValue: 'pt-BR'}],
      bootstrap: [AppComponent]
})
export class AppModule { }
