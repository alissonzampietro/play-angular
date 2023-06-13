import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appHighLight]'
})

export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef, private render: Renderer2) {}
    @HostBinding('style.color') textColor: string;

    ngOnInit(): void {
        this.render.setStyle(this.elementRef.nativeElement, 'color', '#fff');
        this.elementRef.nativeElement.style.backgroundColor = '#16921c';
    }

    @HostListener('dblclick')
    public action() {
        this.textColor = 'pink';
    }


}