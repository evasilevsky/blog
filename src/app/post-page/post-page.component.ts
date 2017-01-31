import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'app/post';
import { PostService } from 'app/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  private post: FirebaseObjectObservable<any>;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private af: AngularFire
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.getPost(id);
  }

  private getPost = (id: string) => {
    this.post = this.postService.getPost("fmDl9t7hnCTFXwu1GWaxnVY6hFm1", id);
    // let storedPosts = localStorage.getItem("posts");
    // if (storedPosts) {
    //   let posts: Post[] = JSON.parse(storedPosts);
    //   let filteredPosts: Post[] = posts.filter((post: Post) => {
    //     return post.id === id;
    //   });
    //   if (filteredPosts.length > 0) {
    //     this.post = filteredPosts[0];
    //   }
    // }
  }
}
