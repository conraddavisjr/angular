import { 
  Directive, 
  Input, 
  HostBinding,
  HostListener,
  ElementRef,
  Renderer,
  OnChanges,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[classToggle]'
})
export class classToggleDirective implements OnInit {
  @Input() useClass: string;
  @Input() toggleActionOn: string = 'click';
  @Input() toggleActionOff: string = 'click';
  @HostBinding('class') elClass: any

  isToggledOn = false;

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer
  ) {}

  ngOnInit() {

    this.renderer.listen(this.elementRef.nativeElement, this.toggleActionOn, (event) => {
      if (this.isToggledOn) return;
      this.elClass = this.useClass;
      this.isToggledOn = true;
    });

    this.renderer.listen(this.elementRef.nativeElement, this.toggleActionOff, (event) => {
      if (!this.isToggledOn) return;
      this.elClass = '';
      this.isToggledOn = false;
    });
  }

}
