import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private firebaseAuth: any = null;
  private user: User = null;
  constructor(
    public af: AngularFire
  ) { }

  ngOnInit() {
    this.af.auth.subscribe(authResponse => this.firebaseAuth = authResponse);
  }

  loginWithGoogle = () => {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout = () => {
    this.af.auth.logout();
  }
}

export class User {
  
}