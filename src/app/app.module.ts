import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';

import { PostService } from './post.service';
import { UserService } from './user.service';
import { CanActivateAddPost } from './can-activate-add-post.service';

import { AddPostComponent } from './add-post/add-post.component';
import { NavPostListComponent } from './nav-post-list/nav-post-list.component';
import { Routes, RouterModule } from '@angular/router';
import { PostPageComponent } from './post-page/post-page.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AddPostPageComponent } from './add-post-page/add-post-page.component';
import { AdminToolsComponent } from './admin-tools/admin-tools.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostPageComponent },
  { path: 'addpost', component: AddPostPageComponent, canActivate: [CanActivateAddPost] }
];

var firebaseConfig = {
    apiKey: "AIzaSyCyaaoBRL6pEvTbqHN9nWcWos48oDcnRzE",
    authDomain: "evasilevblog.firebaseapp.com",
    databaseURL: "https://evasilevblog.firebaseio.com",
    storageBucket: "evasilevblog.appspot.com",
    messagingSenderId: "935129818356"
  };

var firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    AddPostComponent,
    NavPostListComponent,
    PostPageComponent,
    HeaderComponent,
    LoginComponent,
    AddPostPageComponent,
    AdminToolsComponent
  ],
  providers: [
    PostService,
    UserService,
    CanActivateAddPost
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
