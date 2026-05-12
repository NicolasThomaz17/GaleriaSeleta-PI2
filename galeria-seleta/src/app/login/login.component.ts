import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface FormLogin {
  email: string;
  senha: string;
  lembrar: boolean;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  /* ── Dados do formulário ── */
  form: FormLogin = {
    email: '',
    senha: '',
    lembrar: false
  };

  /* ── Visibilidade da senha ── */
  mostrarSenha = false;

  /* ── Campos tocados ── */
  emailTocado = false;
  senhaTocada = false;

  /* ── Estado de envio ── */
  carregando = false;
  mensagemSucesso = '';
  mensagemErro = '';

  /* ══════════════════════════════════════════════
     VALIDAÇÕES
  ══════════════════════════════════════════════ */

  get emailValido(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email);
  }

  get senhaValida(): boolean {
    return this.form.senha.length > 0;
  }

  get formularioValido(): boolean {
    return this.emailValido && this.senhaValida;
  }

  /* ══════════════════════════════════════════════
     ENVIO
  ══════════════════════════════════════════════ */

  onSubmit(): void {
    this.emailTocado = true;
    this.senhaTocada = true;
    this.mensagemSucesso = '';
    this.mensagemErro = '';

    if (!this.formularioValido) {
      this.mensagemErro = 'Preencha os campos corretamente.';
      return;
    }

    this.carregando = true;

    /* Substituir pela chamada real de autenticação */
    setTimeout(() => {
      this.carregando = false;
      this.mensagemSucesso = 'Login realizado com sucesso!';
      /* Em produção: this.router.navigate(['/']) */
    }, 1500);
  }
}