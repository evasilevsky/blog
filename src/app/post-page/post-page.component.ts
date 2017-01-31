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
    this.route.params.subscribe(params => {
      this.post = this.postService.getPost("fmDl9t7hnCTFXwu1GWaxnVY6hFm1", params['id']);
    })
  }
}
