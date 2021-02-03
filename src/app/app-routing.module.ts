import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'loginone',
    loadChildren: () => import('./auth/loginone/loginone.module').then( m => m.LoginonePageModule)
  },
  {
    path: 'logintwo',
    loadChildren: () => import('./auth/logintwo/logintwo.module').then( m => m.LogintwoPageModule)
  },
  {
    path: 'loginthree',
    loadChildren: () => import('./auth/loginthree/loginthree.module').then( m => m.LoginthreePageModule)
  },
  {
    path: 'walktru-one',
    loadChildren: () => import('./walkthroughs/walktru-one/walktru-one.module').then( m => m.WalktruOnePageModule)
  },
  {
    path: 'walktru-two',
    loadChildren: () => import('./walkthroughs/walktru-two/walktru-two.module').then( m => m.WalktruTwoPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
