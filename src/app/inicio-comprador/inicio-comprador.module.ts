import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioCompradorPageRoutingModule } from './inicio-comprador-routing.module';

import { InicioCompradorPage } from './inicio-comprador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioCompradorPageRoutingModule
  ],
  declarations: [InicioCompradorPage]
})
export class InicioCompradorPageModule {}
