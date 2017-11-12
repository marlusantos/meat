import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OrderComponent } from 'app/order/order.component'

// PASSOS: cria a classe (esta aqui), declara no provaider, associa na rota

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {
    canDeactivate(orderComponent: OrderComponent, 
        activatedRoute: ActivatedRouteSnapshot,
        routerState: RouterStateSnapshot): boolean{
            if(!orderComponent.isOrderCompleted()){
                return window.confirm('Deseja deistir da compra?')
            }else{
                return true
            }
        }
}