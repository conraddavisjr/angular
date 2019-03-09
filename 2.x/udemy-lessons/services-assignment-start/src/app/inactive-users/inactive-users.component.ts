import { Component, Input } from '@angular/core';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService){}

  setToActive(i) {
    this.usersService.onSetToActive(i);
  }
}
