import {
  Component,
  Input 
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() itemClicked;

  visiblePage = 'recipes';

  handleNavigation(val) {
    console.log('handleNavigation - e: ', val);
    this.visiblePage = val;
  }
}
