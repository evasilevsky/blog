import { Component } from '@angular/core';
import { Post } from 'app/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    let posts: Post[] = [];
    if (storedPosts) {
      posts = JSON.parse(storedPosts);
    }
    this.posts = posts;
    return Observable.from(posts);
  }
}
