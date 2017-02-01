import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private title: string = "Fantasical Blog";
  private author: string = "Eric Vasilevsky";
  constructor(
  ) { }

  ngOnInit() {
  }
}
