import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'produtos',
    loadComponent: () =>
      import('./produtos/produtos.component').then(m => m.ProdutosComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'cadastro',
    loadComponent: () =>
      import('./cadastro/cadastro.component').then(m => m.CadastroComponent)
  },
  { path: '**', redirectTo: '' }
];
