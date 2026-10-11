import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/**
 * Faz o elemento aparecer suavemente quando entra na tela.
 * Uso: <article class="card" reveal [revealDelay]="150">
*/
@Directive({ selector: '[reveal]', standalone: true })
export class RevealDirective implements OnInit, OnDestroy {
    revealDelay = input(0);
    private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    private observer?: IntersectionObserver;

    ngOnInit() {
        this.el.classList.add('reveal');
        this.el.style.transitionDelay = `${this.revealDelay()}ms`;

        if (typeof IntersectionObserver === 'undefined') {
            this.el.classList.add('reveal-in');
            return;
        }
        this.observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                this.el.classList.add('reveal-in');
                this.observer?.disconnect();
            }
        },
        { threshold: 0.15 },
        );
        this.observer.observe(this.el);
    }

    ngOnDestroy() { this.observer?.disconnect(); }
}