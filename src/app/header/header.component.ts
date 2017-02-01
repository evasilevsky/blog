import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private title: string = "Fantasical Blog";
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }
}
