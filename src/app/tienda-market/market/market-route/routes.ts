import { PedidosComponent } from './../../pedidos/pedidos.component';
import { CarritoComponent } from './../../carrito/carrito.component';
import { ProductosComponent } from './../../productos/productos.component';
import { TiendaMarketComponent } from './../../tienda-market.component';


export const routes = [
  {
    path: 'market',
    component: TiendaMarketComponent,
    children: [
      {
        path: 'cart', // child route path
        component: CarritoComponent, // child route component that the router renders
      },
      {
        path: 'pedido', // child route path
        component: PedidosComponent, // child route component that the router renders

      }
    ]
  },

  {
		path: "**",
		redirectTo: "/"
	}
];
