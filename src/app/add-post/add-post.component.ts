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

  private canAdd: boolean = false;
  constructor(
    private af: AngularFire,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      this.af.database.object("/users/" + auth.uid + "/role")
        .subscribe(t => {
          if (t.$value === "admin") {
            this.canAdd = true;
          } else {
            this.canAdd = false;
          }
      });
    });
  }

  private post = () => {
    this.postService.addPost(this.title, this.body)
  }
}
