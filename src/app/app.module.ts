import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';

import { AddPostComponent } from './add-post/add-post.component';
import { NavPostListComponent } from './nav-post-list/nav-post-list.component';
import { Routes, RouterModule } from '@angular/router';
import { PostPageComponent } from './post-page/post-page.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    AddPostComponent,
    NavPostListComponent,
    PostPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
