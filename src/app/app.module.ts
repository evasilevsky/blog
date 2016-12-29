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

const appRoutes: Routes = [
  { path: 'post/:id', component: PostComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    AddPostComponent,
    NavPostListComponent
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
