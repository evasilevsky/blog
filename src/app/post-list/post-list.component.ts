import { Component, OnInit } from '@angular/core';
import { Post } from 'app/post';

import { Observable } from 'rxjs';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  private posts: Post[];
  constructor() { }

  ngOnInit() {
    if ("localStorage" in window) {
      this.getDataFromLocalStorage()
        .subscribe(s => {
          console.log("next: " + s.title);
        })
    }
  }

  private getDataFromLocalStorage = () => {
    let storedPosts = localStorage.getItem("posts");
    let posts: Post[] = JSON.parse(storedPosts);
    this.posts = posts;
    return Observable.from(posts);
  }

}
