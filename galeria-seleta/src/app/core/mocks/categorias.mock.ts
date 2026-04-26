import { Categoria } from '../models/categoria.model';

export const CATEGORIAS_MOCK: Categoria[] = [
  { id: 1, cat_pai_id: null, nome: 'Feminino', slug: 'feminino', descricao: 'Moda feminina', ativo: true },
  { id: 2, cat_pai_id: null, nome: 'Masculino', slug: 'masculino', descricao: 'Moda masculina', ativo: true },
  { id: 3, cat_pai_id: 1, nome: 'Vestidos', slug: 'vestidos', descricao: null, ativo: true },
  { id: 4, cat_pai_id: 1, nome: 'Blusas', slug: 'blusas', descricao: null, ativo: true },
  { id: 5, cat_pai_id: 2, nome: 'Camisas', slug: 'camisas', descricao: null, ativo: true },
];
