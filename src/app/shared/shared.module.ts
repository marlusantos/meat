import {NgModule, ModuleWithProviders} from '@angular/core'
import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component'

import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

// servicos em um modulo compartilhado
import {OrderService} from '../order/order.service'
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {RestaurantsService} from '../restaurants/restaurants.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component'

// Classe de envio de mensagem (notificacao)
import {NotificationService} from './messages/notification.service'

import {LoginService} from '../security/login/login.service'

import {LoggedInGuard} from '../security/loggedin.guard'

import {LeaveOrderGuard} from '../order/leave-order.guard'

@NgModule ({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports:[CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, 
        CommonModule, FormsModule, ReactiveFormsModule, SnackbarComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, OrderService, 
                RestaurantsService, NotificationService, 
                LoginService, LoggedInGuard,
                LeaveOrderGuard]
        }
    }
}