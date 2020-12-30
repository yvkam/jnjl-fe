import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[imgFallback]'
})
export class ImgFallbackDirective {

  @Input()
  imgFallback!: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('error')
  loadFallbackOnError(): void {
    const element: HTMLImageElement = this.elementRef.nativeElement;
    element.src = this.imgFallback;
  }
}
