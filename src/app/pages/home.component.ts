import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJETO, PILARES, PLATAFORMAS } from '../data/projeto.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SpotlightDirective } from '../shared/spotlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective, SpotlightDirective],
  template: `
    <section class="hero">
      <div class="orb orb-a"></div>
      <div class="orb orb-b"></div>
      <div class="container">
        <span class="eyebrow">Plataforma de distribuição digital de jogos</span>
        <h1 class="grad">{{ p.slogan }}</h1>
        <p class="lead">{{ p.resumo }}</p>
        <div class="actions">
          <a routerLink="/projeto" class="btn primary">Conhecer o projeto</a>
          <a routerLink="/arquitetura" class="btn ghost">Ver como funciona</a>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="container">
        <span class="eyebrow">Pilares</span>
        <h2>O que a plataforma entrega</h2>
        <div class="grid cols-2">
          @for (x of pilares; track x.titulo; let i = $index) {
            <article class="card" reveal spotlight [revealDelay]="i * 120">
              <span class="tag">{{ x.tag }}</span>
              <h3>{{ x.titulo }}</h3>
              <p>{{ x.texto }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <span class="eyebrow">Plataformas</span>
        <h2>Uma conta, duas formas de acesso</h2>
        <p class="lead">A loja web e o aplicativo conversam com o mesmo back-end, então o jogador não perde nada ao trocar de dispositivo.</p>
        <div class="grid cols-2">
          @for (x of plataformas; track x.nome; let i = $index) {
            <article class="card" reveal spotlight [revealDelay]="i * 150">
              <span class="tag">{{ x.papel }}</span>
              <h3>{{ x.nome }}</h3>
              <ul>
                @for (i of x.itens; track i) { <li>{{ i }}</li> }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { position: relative; overflow: hidden; padding: 7rem 0 6rem; background: radial-gradient(900px 400px at 15% 0%, rgba(91,141,239,.18), transparent 60%), radial-gradient(700px 400px at 90% 20%, rgba(45,212,167,.10), transparent 60%); }
    .hero .container { position: relative; z-index: 1; }
    .orb { position: absolute; border-radius: 50%; filter: blur(70px); opacity: .45; pointer-events: none; }
    .orb-a { width: 380px; height: 380px; background: var(--primary); top: -120px; left: -80px; animation: float 11s ease-in-out infinite; }
    .orb-b { width: 320px; height: 320px; background: var(--accent); bottom: -140px; right: -60px; animation: float 14s ease-in-out infinite reverse; }
    @keyframes float { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(50px, 36px); } }
    .grad { background: linear-gradient(100deg, var(--text) 20%, var(--accent) 50%, var(--primary) 80%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: shine 7s linear infinite; }
    @keyframes shine { to { background-position: 200% center; } }
    ul { list-style: none; margin-top: .5rem; }
    li { color: var(--muted); padding: .45rem 0 .45rem 1.2rem; position: relative; border-top: 1px solid var(--border); }
    li:first-child { border-top: none; }
    li::before { content: ''; position: absolute; left: 0; top: 1.05rem; width: 6px; height: 6px; background: var(--accent); border-radius: 50%; }
  `],
})
export class HomeComponent { p = PROJETO; pilares = PILARES; plataformas = PLATAFORMAS; }