import { 
  Component,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() itemClicked = new EventEmitter<string>();
  
  
  navItemClick(e) {
    let itemName = e.target.text.toLowerCase();
    console.log(e.target.text);
    this.itemClicked.emit(itemName);
  }
}
