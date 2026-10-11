import { Component } from '@angular/core';
import { PILARES } from '../data/projeto.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SpotlightDirective } from '../shared/spotlight.directive';

@Component({
  selector: 'app-projeto',
  standalone: true,
  imports: [RevealDirective, SpotlightDirective],
  template: `
    <div class="container page-head">
      <span class="eyebrow">O Projeto</span>
      <h1>O que será e como será</h1>
      <p class="lead">Esta página descreve o propósito, o público e o funcionamento esperado da loja virtual de games.</p>
    </div>

    <section class="section alt">
      <div class="container">
        <div class="grid cols-3">
          <article class="card" reveal spotlight><span class="tag">Objetivo</span><h3>O problema</h3>
            <p>Jogadores precisam de um lugar confiável para encontrar, comprar e organizar seus jogos digitais, sem depender de várias contas e aplicativos.</p></article>
          <article class="card" reveal spotlight [revealDelay]="120"><span class="tag">Solução</span><h3>A proposta</h3>
            <p>Uma loja com catálogo, compra e biblioteca integrados, acessível pelo navegador e por um aplicativo próprio.</p></article>
          <article class="card" reveal spotlight [revealDelay]="240"><span class="tag">Público</span><h3>Para quem</h3>
            <p>Jogadores de PC e mobile que querem praticidade, e pequenos desenvolvedores que buscam um canal de distribuição.</p></article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <span class="eyebrow">Funcionalidades</span>
        <h2>Principais módulos</h2>
        <div class="grid cols-2">
          @for (x of pilares; track x.titulo; let i = $index) {
            <article class="card" reveal spotlight [revealDelay]="i * 120">
              <span class="tag">{{ x.tag }}</span><h3>{{ x.titulo }}</h3><p>{{ x.texto }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="container">
        <span class="eyebrow">Jornada do usuário</span>
        <h2>Do cadastro ao jogo na biblioteca</h2>
        <ol class="flow">
          <li reveal><strong>Cadastro</strong><span>Cria a conta e faz login.</span></li>
          <li reveal [revealDelay]="100"><strong>Exploração</strong><span>Busca e filtra o catálogo.</span></li>
          <li reveal [revealDelay]="200"><strong>Compra</strong><span>Adiciona ao carrinho e paga.</span></li>
          <li reveal [revealDelay]="300"><strong>Biblioteca</strong><span>Jogo liberado na conta.</span></li>
          <li reveal [revealDelay]="400"><strong>Jogo</strong><span>Baixa e joga, na web ou no app.</span></li>
        </ol>
      </div>
    </section>
  `,
  styles: [`
    .flow { list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 1rem; margin-top: 2.5rem; counter-reset: step; }
    .flow li { counter-increment: step; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.3rem; position: relative; }
    .flow li::before { content: counter(step, decimal-leading-zero); color: var(--accent); font-weight: 700; font-size: .85rem; display: block; margin-bottom: .5rem; }
    .flow strong { display: block; margin-bottom: .25rem; }
    .flow span { color: var(--muted); font-size: .92rem; }
  `],
})
export class ProjetoComponent { pilares = PILARES; }