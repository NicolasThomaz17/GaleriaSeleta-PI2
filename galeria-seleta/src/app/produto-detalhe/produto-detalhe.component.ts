import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProdutoDetalhe } from '../core/models/produto-detalhe.model';
import { Produto } from '../core/models/produto.model';
import { PRODUTOS_MOCK } from '../core/mocks/produtos.mock';
import { CATEGORIAS_MOCK } from '../core/mocks/categorias.mock';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './produto-detalhe.component.html',
  styleUrl: './produto-detalhe.component.css'
})
export class ProdutoDetalheComponent implements OnInit {

  produto: ProdutoDetalhe | null = null;
  nomeCategoria = '';
  tamanhoSelecionado = '';
  quantidade = 1;
  relacionados: Produto[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.produto = PRODUTOS_MOCK.find(p => p.id === id) ?? null;

      if (this.produto) {
        const cat = CATEGORIAS_MOCK.find(c => c.id === this.produto!.categoria_id);
        this.nomeCategoria = cat?.nome ?? '';
        this.tamanhoSelecionado = this.produto.tamanhos[0] ?? '';

        this.relacionados = PRODUTOS_MOCK
          .filter(p => p.categoria_id === this.produto!.categoria_id && p.id !== this.produto!.id)
          .slice(0, 4);

        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }

  precoFinal(p: Produto): number {
    return p.preco_desconto ?? p.preco;
  }

  temDesconto(p: Produto): boolean {
    return p.preco_desconto !== null && p.preco_desconto < p.preco;
  }

  porcentagemDesconto(p: Produto): number {
    if (!p.preco_desconto) return 0;
    return Math.round((1 - p.preco_desconto / p.preco) * 100);
  }

  selecionarTamanho(t: string): void {
    this.tamanhoSelecionado = t;
  }

  alterarQuantidade(delta: number): void {
    const max = this.produto?.estoque ?? 1;
    this.quantidade = Math.min(max, Math.max(1, this.quantidade + delta));
  }

  adicionarCarrinho(): void {
    // TODO: integrar com serviço de carrinho
    console.log('Adicionado ao carrinho:', {
      produto_id: this.produto?.id,
      tamanho: this.tamanhoSelecionado,
    });
  }

  comprarAgora(): void {
    this.router.navigate(['/checkout']);
  }

  badgeCondicao(c: string): string {
    const map: Record<string, string> = {
      excelente: '★ Excelente',
      'muito bom': '◆ Muito Bom',
      bom: '● Bom'
    };
    return map[c] ?? c;
  }
}
