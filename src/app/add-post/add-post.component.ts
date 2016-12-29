import { Component, OnInit } from '@angular/core';
import { Post } from 'app/post';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  private title: string;
  private body: string;
  constructor() { }

  ngOnInit() {
  }

  private post = () => {
    if ("localStorage" in window) {
      let storedPosts = localStorage.getItem("posts");
      let posts: Post[] = JSON.parse(storedPosts);
      posts.push(new Post(this.title, this.body));
      localStorage.setItem("posts", JSON.stringify(posts));
      this.title = "";
      this.body = "";
    }
  }
}
