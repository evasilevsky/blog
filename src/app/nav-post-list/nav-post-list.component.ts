import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'app/post';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PostService } from 'app/post.service';
@Component({
  selector: 'nav-post-list',
  templateUrl: './nav-post-list.component.html',
  styleUrls: ['./nav-post-list.component.css']
})
export class NavPostListComponent implements OnInit {
  private uid: string;
  testPosts: FirebaseListObservable<any>;
  constructor(private af: AngularFire,
  private postService: PostService) { 
    this.af.auth.subscribe(auth => {
      this.uid = auth.uid;
      this.testPosts = this.postService.getPosts(auth.uid)
    });
  }

  public deletePost = (id: string) => {
    this.postService.deletePost(id);
  }

  ngOnInit() {
  }

}
