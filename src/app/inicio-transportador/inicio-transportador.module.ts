import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioTransportadorPageRoutingModule } from './inicio-transportador-routing.module';

import { InicioTransportadorPage } from './inicio-transportador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioTransportadorPageRoutingModule
  ],
  declarations: [InicioTransportadorPage]
})
export class InicioTransportadorPageModule {}
