import { 
  Component,
  OnInit,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() counter = new EventEmitter<number>();

  ref: any;
  seconds = 0;

  constructor() { 
    this.ref = null;
  }

  ngOnInit() {
  }

  startGame() {
    console.log('startGame called');
    this.ref = setInterval(() => {
      this.counter.emit(this.seconds += 1);
    }, 1000);
  }

  stopGame() {
    console.log('stopGame called');
    clearInterval(this.ref);
  }

}
