import { Component, OnInit } from '@angular/core';
import { Post } from 'app/post';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  private posts: Post[];
  constructor() { }

  ngOnInit() {
    this.posts = [
      new Post("Title 1", "Body 1"),
      new Post("Title 2", "Body 2")
    ];
  }

}
