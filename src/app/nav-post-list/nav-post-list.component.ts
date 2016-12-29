import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'app/post';
@Component({
  selector: 'nav-post-list',
  templateUrl: './nav-post-list.component.html',
  styleUrls: ['./nav-post-list.component.css']
})
export class NavPostListComponent implements OnInit {
  @Input() posts: Post[];
  constructor() { }

  ngOnInit() {
  }

}
