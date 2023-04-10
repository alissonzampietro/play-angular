import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.elementRef.nativeElement.style.color = '#fff';
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#ff4343');
    }
}