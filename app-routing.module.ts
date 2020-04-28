import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',redirectTo: 'inicio',pathMatch: 'full'
  },
  {
    path: 'inicio',loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'terreno1',
    loadChildren: () => import('./pages/terreno1/terreno1.module').then( m => m.Terreno1PageModule)
  },
  {
    path: 'terreno2',
    loadChildren: () => import('./pages/terreno2/terreno2.module').then( m => m.Terreno2PageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
