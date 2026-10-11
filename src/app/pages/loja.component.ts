import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container page-head">
      <span class="eyebrow">Loja</span>
      <h1>A loja está em construção</h1>
      <p class="lead">Esta rota é o ponto de ligação entre o site de apresentação e a loja web. Quando a loja estiver pronta, o catálogo passa a viver aqui.</p>
      <div class="actions">
        <a routerLink="/roadmap" class="btn primary">Acompanhar o roadmap</a>
        <a routerLink="/" class="btn ghost">Voltar ao início</a>
      </div>
    </div>
  `,
})
export class LojaComponent {}