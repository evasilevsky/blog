import { Component, OnInit } from '@angular/core';
import { Post } from 'app/post';
import { AngularFire } from 'angularfire2';
import { PostService } from 'app/post.service';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  private title: string;
  private body: string;
  constructor(
    private af: AngularFire,
    private postService: PostService
  ) { }

  ngOnInit() {
  }

  private post = () => {
    this.postService.addPost(this.title, this.body)
    // if ("localStorage" in window) {
    //   let storedPosts = localStorage.getItem("posts");
    //   let posts: Post[] = [];
    //   let maxValue: number = 0;
    //   if (storedPosts) {
    //     posts = JSON.parse(storedPosts);
    //     maxValue = Math.max.apply(Math,posts.map(post => {
    //       return post.id;
    //     }));
    //   }

    //   posts.push(new Post(maxValue + 1, this.title, this.body));
    //   localStorage.setItem("posts", JSON.stringify(posts));
    //   this.title = "";
    //   this.body = "";
    // }
  }
}
