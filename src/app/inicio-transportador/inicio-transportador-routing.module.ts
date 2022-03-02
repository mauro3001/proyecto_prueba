import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioTransportadorPage } from './inicio-transportador.page';

const routes: Routes = [
  {
    path: '',
    component: InicioTransportadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioTransportadorPageRoutingModule {}
