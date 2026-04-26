import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Categoria } from '../core/models/categoria.model';
import { CATEGORIAS_MOCK } from '../core/mocks/categorias.mock';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  termoBusca = '';
  dropdownAberto = false;
  categorias: Categoria[] = CATEGORIAS_MOCK.filter(c => c.cat_pai_id === null);
}
