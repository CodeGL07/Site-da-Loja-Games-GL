import { Component } from '@angular/core';
import { PROJETO } from '../data/projeto.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="container">
        <strong>{{ nome }}</strong>
        <p>Projeto em desenvolvimento. Conteúdo sujeito a alterações.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer { border-top: 1px solid var(--border); padding: 2.5rem 0; }
    p { font-size: .9rem; margin-top: .25rem; }
  `],
})
export class FooterComponent { nome = PROJETO.nome; }