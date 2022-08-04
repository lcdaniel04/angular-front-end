import { ProductosComponent } from './tienda-market/productos/productos.component';
import { LoginGuard } from './guard/login.guard';
import { TiendaMarketComponent } from './tienda-market/tienda-market.component';
import { LoginComponent } from './login/login.component';

export const routes = [
  { path: '', canActivate: [LoginGuard], component: LoginComponent },

  { path: '**', redirectTo: 'not-found' },
];
