import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit{

    @Input() defaultColor:string = 'transparent';
    @Input() clickColor:string = 'transparent';
    @Input('appBetterHighlight') highlightColor:string = 'transparent';

    // we can pass a string defining to which property of the host element we want to bind
    @HostBinding('style.background') backgroundColor: string;

    @HostListener('mouseenter') 
    public mouseOver(data: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#ff4343');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') 
    public mouseLeave(data: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#0008ff');
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#fff');
    }

    @HostListener('mousedown') 
    public mouseDown(data: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#b75b00');
        this.backgroundColor = this.clickColor;
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#ff4343');
        this.backgroundColor = this.defaultColor;
    }
}