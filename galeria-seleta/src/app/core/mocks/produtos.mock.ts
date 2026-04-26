import { Produto } from '../models/produto.model';

export const PRODUTOS_MOCK: Produto[] = [
  {
    id: 1, categoria_id: 3, nome: 'Vestido Floral', descricao: 'Vestido leve estampado',
    preco: 189.90, preco_desconto: 149.90, estoque: 10, status: 'ativo',
    criado_em: '2025-01-10T00:00:00',
    imagens: [{ id: 1, produto_id: 1, url: '', principal: true, ordem: 0 }]
  },
  {
    id: 2, categoria_id: 4, nome: 'Blusa Listrada', descricao: 'Blusa casual listrada',
    preco: 89.90, preco_desconto: null, estoque: 25, status: 'ativo',
    criado_em: '2025-01-11T00:00:00',
    imagens: [{ id: 2, produto_id: 2, url: '', principal: true, ordem: 0 }]
  },
  {
    id: 3, categoria_id: 5, nome: 'Camisa Social', descricao: 'Camisa slim fit',
    preco: 129.90, preco_desconto: null, estoque: 15, status: 'ativo',
    criado_em: '2025-01-12T00:00:00',
    imagens: [{ id: 3, produto_id: 3, url: '', principal: true, ordem: 0 }]
  },
  {
    id: 4, categoria_id: 3, nome: 'Vestido Midi', descricao: 'Vestido midi elegante',
    preco: 239.90, preco_desconto: 199.90, estoque: 8, status: 'ativo',
    criado_em: '2025-01-13T00:00:00',
    imagens: [{ id: 4, produto_id: 4, url: '', principal: true, ordem: 0 }]
  },
  {
    id: 5, categoria_id: 4, nome: 'Blusa Cropped', descricao: 'Blusa cropped moderna',
    preco: 69.90, preco_desconto: null, estoque: 30, status: 'ativo',
    criado_em: '2025-01-14T00:00:00',
    imagens: [{ id: 5, produto_id: 5, url: '', principal: true, ordem: 0 }]
  },
  {
    id: 6, categoria_id: 5, nome: 'Camisa Xadrez', descricao: 'Camisa casual xadrez',
    preco: 109.90, preco_desconto: 89.90, estoque: 20, status: 'ativo',
    criado_em: '2025-01-15T00:00:00',
    imagens: [{ id: 6, produto_id: 6, url: '', principal: true, ordem: 0 }]
  },
  {
    id: 7, categoria_id: 3, nome: 'Vestido Longo', descricao: 'Vestido longo de festa',
    preco: 349.90, preco_desconto: null, estoque: 5, status: 'ativo',
    criado_em: '2025-01-16T00:00:00',
    imagens: [{ id: 7, produto_id: 7, url: '', principal: true, ordem: 0 }]
  },
  {
    id: 8, categoria_id: 4, nome: 'Blusa Manga Longa', descricao: 'Blusa manga longa confortável',
    preco: 99.90, preco_desconto: 79.90, estoque: 18, status: 'ativo',
    criado_em: '2025-01-17T00:00:00',
    imagens: [{ id: 8, produto_id: 8, url: '', principal: true, ordem: 0 }]
  },
  {
    id: 9, categoria_id: 5, nome: 'Camisa Polo', descricao: 'Camisa polo clássica',
    preco: 119.90, preco_desconto: null, estoque: 22, status: 'ativo',
    criado_em: '2025-01-18T00:00:00',
    imagens: [{ id: 9, produto_id: 9, url: '', principal: true, ordem: 0 }]
  },
  {
    id: 10, categoria_id: 3, nome: 'Vestido Rodado', descricao: 'Vestido rodado com cinto',
    preco: 199.90, preco_desconto: 169.90, estoque: 12, status: 'ativo',
    criado_em: '2025-01-19T00:00:00',
    imagens: [{ id: 10, produto_id: 10, url: '', principal: true, ordem: 0 }]
  },
];
