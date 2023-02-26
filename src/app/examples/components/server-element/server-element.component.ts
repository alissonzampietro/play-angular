import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterViewChecked, AfterContentChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { ServerElement } from 'src/app/shared/server-element.interface';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy
{

  @Input('srvElement') element: ServerElement;
  @Input() name: string;
  @ViewChild('heading', {static: true}) 
  header: ElementRef;
  @ContentChild('contentParagraph', {static:true})
  paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Content Oninit: '+this.header.nativeElement.textContent)
    console.log('Content of paragraph Oninit: '+this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(): void {
    console.log('Do Check');
  }

  ngAfterContentInit(): void {
    console.log('After content init')
  }

  ngAfterContentChecked():void {
    console.log('AfterContentChecked')
  }

  ngAfterViewChecked():void {
    console.log('AfterViewChecked')
    console.log('Content AfterViewChecked: '+this.header.nativeElement.textContent)
    console.log('Content of paragraph AfterViewChecked: '+this.paragraph.nativeElement.textContent)
  }

  ngOnDestroy():void {
    console.log('on Destroy')
  }

}
