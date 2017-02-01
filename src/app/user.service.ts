import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserService {
  private auth: any;
  private userSettings: UserSettings = new UserSettings();
  constructor(
    private af: AngularFire
  ) {
    this.af.auth.subscribe(auth => {
      this.auth = auth;
      this.af.database.object("/users/" + auth.uid)
        .subscribe(t => {
          console.log(t);
          if (t.role === "admin") {
            this.userSettings.enableEditing = t.settings.enableEditing;
          } else {
            this.userSettings.enableEditing = false;
          }
        });
    });
   }

   public toggleEnableEditing = () => {
     this.userSettings.enableEditing = !this.userSettings.enableEditing;
     this.af.database.object("/users/" + this.auth.uid + "/settings")
      .set({
        enableEditing: this.userSettings.enableEditing
      })
   }

   public getUserSettings = () => {
     return this.userSettings;
   }
}

export class UserSettings {
  enableEditing: boolean = false;
}