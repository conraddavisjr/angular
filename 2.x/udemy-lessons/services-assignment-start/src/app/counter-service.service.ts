export class CounterService {
  activeClicks = 0;
  inactiveClicks = 0;

  constructor() {}
  
  clickCounter(statusType: string) {
    switch(statusType) {
      case 'active':
        this.activeClicks += 1;
        console.log('this.activeClicks: ', this.activeClicks);
      
      case 'inactive':
        this.inactiveClicks += 1;
        console.log('this.inactiveClicks: ', this.inactiveClicks);
      default:
        // no action
        
    }
  }

}
