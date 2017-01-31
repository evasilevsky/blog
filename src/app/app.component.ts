import { Component } from '@angular/core';
import { Post } from 'app/post';
import { Observable } from 'rxjs';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'app/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private posts: Post[];
  private selectedPost: any;
  constructor(
    private postService: PostService,
    private af: AngularFire
  ) { }

  ngOnInit() {
  }

}
