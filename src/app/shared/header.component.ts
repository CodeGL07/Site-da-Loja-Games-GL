import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PROJETO } from '../data/projeto.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header>
      <div class="container bar">
        <a routerLink="/" class="brand">{{ nome }}</a>
        <nav>
          <a routerLink="/" routerLinkActive="on" [routerLinkActiveOptions]="{ exact: true }">Início</a>
          <a routerLink="/projeto" routerLinkActive="on">Projeto</a>
          <a routerLink="/arquitetura" routerLinkActive="on">Arquitetura</a>
          <a routerLink="/roadmap" routerLinkActive="on">Roadmap</a>
          <a routerLink="/loja" class="cta">Acessar a loja</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    header { position: sticky; top: 0; z-index: 10; background: rgba(13,17,23,.85); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border); }
    .bar { display: flex; align-items: center; justify-content: space-between; height: 66px; gap: 1rem; flex-wrap: wrap; }
    .brand { font-weight: 700; font-size: 1.15rem; letter-spacing: -0.01em; }
    nav { display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap; }
    nav a { color: var(--muted); font-size: .95rem; transition: color .2s; }
    nav a:hover, nav a.on { color: var(--text); }
    nav a.cta { color: #fff; background: var(--primary); padding: .5rem 1rem; border-radius: 8px; font-weight: 600; }
  `],
})
export class HeaderComponent { nome = PROJETO.nome; }