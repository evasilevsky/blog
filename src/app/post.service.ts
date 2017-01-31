import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Post } from 'app/post';

@Injectable()
export class PostService {
  private uid: string;
  private posts: any;
  constructor(
    private af: AngularFire
  ) { 
    this.af.auth.subscribe(auth => console.log(auth.uid));
  }
  public getPosts = (uid: string) => {
    console.log("getting posts");
    let req = "/users/" + uid + "/posts";
    this.posts = this.af.database.list(req);
    return this.posts;
  }

  public getPost = (uid: string, postId: string) => {
    return this.af.database.object("/users/" + uid + "/posts/" + postId)
  }

  public addPost = (title: string, body: string) => {
    this.posts.push({
      title: title,
      body: body
    });
  }

  public deletePost = (key: string) => {
    this.posts.remove(key);
  }
}