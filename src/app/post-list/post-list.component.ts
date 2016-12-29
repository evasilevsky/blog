import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'app/post';

import { Observable } from 'rxjs';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[];
  ngOnInit() {
  }
}
