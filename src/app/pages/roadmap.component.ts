import { Component } from '@angular/core';
import { FASES } from '../data/projeto.data';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  template: `
    <div class="container page-head">
      <span class="eyebrow">Roadmap</span>
      <h1>Etapas do desenvolvimento</h1>
      <p class="lead">Plano de entrega em fases. Cada etapa produz algo utilizável e prepara a seguinte.</p>
    </div>
    <section class="section alt">
      <div class="container">
        <ol class="timeline">
          @for (f of fases; track f.fase) {
            <li [class.ativo]="f.status === 'Em andamento'">
              <span class="tag">{{ f.fase }} - {{ f.status }}</span>
              <h3>{{ f.titulo }}</h3>
              <p>{{ f.texto }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: [`
    .timeline { list-style: none; border-left: 2px solid var(--border); margin-left: .6rem; }
    .timeline li { position: relative; padding: 0 0 2.2rem 2rem; }
    .timeline li::before { content: ''; position: absolute; left: -8px; top: 4px; width: 14px; height: 14px; border-radius: 50%; background: var(--bg-alt); border: 2px solid var(--border); }
    .timeline li.ativo::before { background: var(--accent); border-color: var(--accent); }
    .tag { font-size: .75rem; color: var(--accent); font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
  `],
})
export class RoadmapComponent { fases = FASES; }