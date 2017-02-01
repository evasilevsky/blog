import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'app/post';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { PostService } from 'app/post.service';
import { UserService, UserSettings } from 'app/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'nav-post-list',
  templateUrl: './nav-post-list.component.html',
  styleUrls: ['./nav-post-list.component.css']
})
export class NavPostListComponent implements OnInit {
  private uid: string;
  private canDelete: boolean = false;
  private canEdit: boolean = false;
  private userSettings: UserSettings;
  private role: FirebaseObjectObservable<any>;
  posts: FirebaseListObservable<any>;
  selectedPost: FirebaseObjectObservable<any>;
  constructor(
    private af: AngularFire,
    private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService
  ) { 
      this.posts = this.postService.getPosts("fmDl9t7hnCTFXwu1GWaxnVY6hFm1");
      this.userSettings = this.userService.getUserSettings();
  }

  public deletePost = (id: string) => {
    this.postService.deletePost(id);
  }

  ngOnInit() {
  }

}
