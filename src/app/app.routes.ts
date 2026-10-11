import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'Início', loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent) },
  { path: 'projeto', title: 'O Projeto', loadComponent: () => import('./pages/projeto.component').then(m => m.ProjetoComponent) },
  { path: 'arquitetura', title: 'Arquitetura', loadComponent: () => import('./pages/arquitetura.component').then(m => m.ArquiteturaComponent) },
  { path: 'roadmap', title: 'Roadmap', loadComponent: () => import('./pages/roadmap.component').then(m => m.RoadmapComponent) },
  { path: 'loja', title: 'Loja', loadComponent: () => import('./pages/loja.component').then(m => m.LojaComponent) },
  { path: '**', redirectTo: '' },
];