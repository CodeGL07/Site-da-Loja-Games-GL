import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/** Brilho que acompanha o mouse dentro do cartão. Uso: <article class="card" spotlight> */
@Directive({ selector: '[spotlight]', standalone: true })
export class SpotlightDirective {
  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent) {
    const r = this.el.getBoundingClientRect();
    this.el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    this.el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }
}