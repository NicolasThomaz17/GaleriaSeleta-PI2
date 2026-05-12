import { Component, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

export type FreteId = 'padrao' | 'expresso' | 'retirada';
export type PagtoId = 'cartao' | 'pix' | 'dinheiro' | 'boleto';

export interface FreteOpcao {
  id: FreteId;
  label: string;
  prazo: string;
  preco: number | null;
}

export interface PagtoOpcao {
  id: PagtoId;
  label: string;
  badge?: string;
  obs?: string;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {

  constructor(private router: Router) {}

  // ── Dados mockados ──────────────────────────────────────────
  readonly usuario = { nome: 'Eduardo Albuquerque', tel: '(11) 90000-0000', endereco: 'Condomínio Arali – Casa Ryan, SP' };

  readonly freteOpcoes: FreteOpcao[] = [
    { id: 'padrao',   label: 'Padrão',          prazo: '5 – 7 Dias',  preco: 29.90 },
    { id: 'expresso', label: 'Expresso',         prazo: '1 – 3 Dias',  preco: 54.90 },
    { id: 'retirada', label: 'Retirada na loja', prazo: '1 – 2 Dias',  preco: null  },
  ];

  readonly pagtoOpcoes: PagtoOpcao[] = [
    { id: 'cartao',   label: 'Cartão' },
    { id: 'pix',      label: 'PIX',      badge: '10% OFF' },
    { id: 'dinheiro', label: 'Dinheiro', obs: 'Apenas para retirada na loja' },
    { id: 'boleto',   label: 'Boleto' },
  ];

  // ── Estado ──────────────────────────────────────────────────
  freteSelecionado = signal<FreteId>('retirada');
  pagtoSelecionado = signal<PagtoId>('pix');
  step             = signal<1 | 2 | 3>(1);
  numeroPedido     = signal<number>(0);
  copiado          = signal<boolean>(false);

  // ── Mocks de pagamento ───────────────────────────────────────
  readonly codigoPix = 'DN4QSND1Z91H2S3HY84TH5JAD4J8NQDBU923O9BHJ3DC4JE3XLANSFS7PAHHDF29B3S4UHAUSD1PJ3HDJBFA2PB3DR023WJADN4XHSL8NKJES71JEB23Q3XKSB3U4HUGJ3KL3DJ';

  // ── Totais ──────────────────────────────────────────────────
  readonly subtotal = 480.00;
  readonly desconto = 48.00;

  get freteValor(): number {
    return this.freteOpcoes.find(f => f.id === this.freteSelecionado())?.preco ?? 0;
  }

  get totalFinal(): number {
    const desc = this.pagtoSelecionado() === 'pix' ? this.desconto : 0;
    return this.subtotal + this.freteValor - desc;
  }

  get descontoAtivo(): boolean {
    return this.pagtoSelecionado() === 'pix';
  }

  get labelPagto(): string {
    const map: Record<PagtoId, string> = {
      pix:      'PIX débito on-line',
      cartao:   'Cartão de crédito',
      dinheiro: 'Dinheiro na retirada',
      boleto:   'Boleto bancário',
    };
    return map[this.pagtoSelecionado()];
  }

  // ── Actions ──────────────────────────────────────────────────
  selecionarFrete(id: FreteId) { this.freteSelecionado.set(id); }
  selecionarPagto(id: PagtoId) { this.pagtoSelecionado.set(id); }

  confirmar(): void {
    this.numeroPedido.set(Math.floor(1_000_000 + Math.random() * 9_000_000));
    this.step.set(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  finalizarPagamento(): void {
    this.step.set(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  voltarParaCheckout(): void {
    this.step.set(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  irParaHome(): void {
    this.router.navigate(['/']);
  }

  irParaPedidos(): void {
    // ajuste a rota conforme existir no projeto
    this.router.navigate(['/']);
  }

  copiarCodigo(): void {
    navigator.clipboard.writeText(this.codigoPix).then(() => {
      this.copiado.set(true);
      setTimeout(() => this.copiado.set(false), 2500);
    });
  }
}