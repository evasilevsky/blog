import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';

@Component({
  selector: 'admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.css']
})
export class AdminToolsComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  
  toggleEnableEditing = () => {
    this.userService.toggleEnableEditing();
  }
}
