import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
  { path: '',              component: HomeComponent         },
  { path: 'cadastro',      component: CadastroComponent     },
  { path: 'login',         component: LoginComponent        },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**',            redirectTo: ''                   }
];