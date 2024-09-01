import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./users/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'reg-cli',
    loadChildren: () => import('./users/reg-cli/reg-cli.module').then( m => m.RegCliPageModule)
  },
  {
    path: 'reg-dev',
    loadChildren: () => import('./users/reg-dev/reg-dev.module').then( m => m.RegDevPageModule)
  },  {
    path: 'mensajes',
    loadChildren: () => import('./mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
