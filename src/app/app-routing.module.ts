import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'inicio-vendedor',
    loadChildren: () => import('./inicio-vendedor/inicio-vendedor.module').then( m => m.InicioVendedorPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'inicio-transportador',
    loadChildren: () => import('./inicio-transportador/inicio-transportador.module').then( m => m.InicioTransportadorPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'productos',
    children:  [
      {
        path: '',
        loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: ':productoId',
        loadChildren: () => import('./productos/detalle-producto/detalle-producto.module').then(m => m.DetalleProductoPageModule)
      }
    ]
  },
  {
    path: 'ofertas',
    children: [
      {
        path: "",
        loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule),
      },
      {
        path: ":productoId",
        loadChildren: () => import('./ofertas/detalle-oferta/detalle-oferta.module').then( m => m.DetalleOfertaPageModule)
      } 
    ],
    canActivate: [IngresadoGuard]
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'informacion-personal',
    loadChildren: () => import('./informacion-personal/informacion-personal.module').then( m => m.InformacionPersonalPageModule),
    canActivate: [IngresadoGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
