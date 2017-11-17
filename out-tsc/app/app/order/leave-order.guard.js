// PASSOS: cria a classe (esta aqui), declara no provaider, associa na rota
var LeaveOrderGuard = (function () {
    function LeaveOrderGuard() {
    }
    LeaveOrderGuard.prototype.canDeactivate = function (orderComponent, activatedRoute, routerState) {
        if (!orderComponent.isOrderCompleted()) {
            return window.confirm('Deseja deistir da compra?');
        }
        else {
            return true;
        }
    };
    return LeaveOrderGuard;
}());
export { LeaveOrderGuard };
//# sourceMappingURL=leave-order.guard.js.map