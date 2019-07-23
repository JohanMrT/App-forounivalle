import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { Routes, RouterModule } from '@angular/router';
//import { AuthGuardService } from './servicios/auth-guard.service';
import { NologinService } from './servicios/nologin.service'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule',
  canActivate:[NologinService] },
  { path: 'menu', loadChildren: './componentes/menu/menu.module#MenuPageModule' },
  { path: 'crearcuenta', loadChildren: './componentes/crearcuenta/crearcuenta.module#CrearcuentaPageModule',
  canActivate:[NologinService] },
  { path: 'confirmardatos', loadChildren: './componentes/confirmardatos/confirmardatos.module#ConfirmardatosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
