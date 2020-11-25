import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[whiteOnBlack]'
})
export class WhiteOnBlackkDirective {

  private clicked: boolean = false;

  @Input('whiteOnBlack') color: string;

  @HostListener('click') onClick() {
    if (this.clicked) {
      this.el.nativeElement.style.backgroundColor = "white";
      this.el.nativeElement.style.color = "black";
      this.clicked=false
    } else {
      this.el.nativeElement.style.backgroundColor = this.color;
      this.el.nativeElement.style.color = "red";
      this.clicked = true;
    }
  }

  constructor(private el: ElementRef) {}

  ngOnInit(){
    
    }

}
