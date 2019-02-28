import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = 'testing';
  userName: string;
  displayParagraph = true;
  buttonClicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  resetUserName() {
    if (this.userName.length > 0) {
      this.userName = ''
    }
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  toggleDisplay() {
    this.displayParagraph = !this.displayParagraph;
    this.buttonClicks.push(this.buttonClicks.length + 1);
    // if(this.buttonClicks > 5)
  }

}
