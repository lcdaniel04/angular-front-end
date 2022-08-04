import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
