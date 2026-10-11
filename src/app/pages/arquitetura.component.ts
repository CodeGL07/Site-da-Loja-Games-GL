import { Component } from '@angular/core';
import { CAMADAS } from '../data/projeto.data';

@Component({
  selector: 'app-arquitetura',
  standalone: true,
  template: `
    <div class="container page-head">
      <span class="eyebrow">Arquitetura</span>
      <h1>Como as partes se conectam</h1>
      <p class="lead">Site, loja e aplicativo são clientes diferentes de uma mesma API. Isso garante dados consistentes e reaproveitamento de regras de negócio.</p>
    </div>

    <section class="section alt">
      <div class="container">
        <div class="diagram">
          <div class="row clients">
            <div class="node">Site de apresentação</div>
            <div class="node">Loja web</div>
            <div class="node">Aplicativo</div>
          </div>
          <div class="arrow">requisições HTTP</div>
          @for (c of camadas.slice(1); track c.nome) {
            <div class="row"><div class="node wide"><strong>{{ c.nome }}</strong><span>{{ c.detalhe }}</span></div></div>
            @if (!$last) { <div class="arrow">acesso a dados</div> }
          }
        </div>
        <p class="note">O site de apresentação e a loja web podem compartilhar a mesma base Angular, separados por rotas, funcionando como o vínculo entre a apresentação e a loja.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <span class="eyebrow">Tecnologias</span>
        <h2>Stack prevista</h2>
        <div class="grid cols-3">
          <article class="card"><span class="tag">Front-end</span><h3>Angular</h3><p>Componentes, rotas e carregamento sob demanda para o site e a loja web.</p></article>
          <article class="card"><span class="tag">Back-end</span><h3>API REST</h3><p>Camada única de regras de negócio, consumida por site e aplicativo.</p></article>
          <article class="card"><span class="tag">Dados</span><h3>Banco relacional</h3><p>Usuários, catálogo, pedidos e licenças de jogos.</p></article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .diagram { display: flex; flex-direction: column; align-items: center; gap: .5rem; }
    .row { display: flex; gap: 1rem; width: 100%; justify-content: center; flex-wrap: wrap; }
    .node { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1rem 1.6rem; font-weight: 600; text-align: center; min-width: 180px; }
    .clients .node { border-color: var(--primary); }
    .node.wide { width: min(560px, 100%); display: flex; flex-direction: column; gap: .2rem; border-color: var(--accent); }
    .node.wide span { color: var(--muted); font-weight: 400; font-size: .9rem; }
    .arrow { color: var(--muted); font-size: .8rem; text-align: center; padding: .4rem 0; }
    .arrow::before { content: ''; display: block; width: 1px; height: 22px; background: var(--border); margin: 0 auto .3rem; }
    .note { max-width: 680px; margin: 2.5rem auto 0; text-align: center; }
  `],
})
export class ArquiteturaComponent { camadas = CAMADAS; }