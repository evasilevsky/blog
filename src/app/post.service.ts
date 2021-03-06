import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Post } from 'app/post';

@Injectable()
export class PostService {
  private uid: string;
  private posts: any;
  constructor(
    private af: AngularFire
  ) { 
  }
  public getPosts = (uid: string) => {
    let req = "/users/" + uid + "/posts";
    this.posts = this.af.database.list(req, {
      query: {
        limitToLast: 20, orderByKey: true
      }
    });
    return this.posts;
  }

  public getPost = (uid: string, postId: string): FirebaseObjectObservable<Post> => {
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
