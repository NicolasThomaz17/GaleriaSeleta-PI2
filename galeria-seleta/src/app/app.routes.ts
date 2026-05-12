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
    path: 'produtos/:id',
    loadComponent: () =>
      import('./produto-detalhe/produto-detalhe.component').then(m => m.ProdutoDetalheComponent)
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
