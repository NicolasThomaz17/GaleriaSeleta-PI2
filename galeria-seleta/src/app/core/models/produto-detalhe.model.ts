import { Produto } from './produto.model';

/** Extensão do modelo de banco com campos extras para o front-end */
export interface ProdutoDetalhe extends Produto {
  historico: string;       // história/narrativa da peça para o brechó
  tamanhos: string[];      // ex: ['P', 'M', 'G', 'GG']
  cor: string;             // ex: 'Azul índigo', 'Preto carvão'
  marca?: string;          // marca original da peça, se conhecida
  condicao: 'excelente' | 'muito bom' | 'bom';
}
