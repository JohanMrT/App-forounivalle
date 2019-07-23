import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '/home/johan/Forounivalle/src/app/servicios/auth-guard.service';


import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [

      {
        path: 'main', loadChildren: '../main/main.module#MainPageModule',
        canActivate:[AuthGuardService] 
      },
      { 
        path: 'infopersonal', loadChildren: '../infopersonal/infopersonal.module#InfopersonalPageModule' 
      },
      { 
        path: 'ayuda', loadChildren: '../ayuda/ayuda.module#AyudaPageModule' 
      },
      {
         path: 'informacion', loadChildren: '../informacion/informacion.module#InformacionPageModule' 
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
