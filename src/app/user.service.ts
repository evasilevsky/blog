import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserService {
  private userSettings: UserSettings = new UserSettings();
  constructor(
    private af: AngularFire
  ) {
   
    this.af.auth.subscribe(auth => {
      this.af.database.object("/users/" + auth.uid + "/role")
        .subscribe(t => {
          if (t.$value === "admin") {
            this.userSettings.canDelete = true;
            this.userSettings.canEdit = true;
          } else {
            this.userSettings.canDelete = false;
            this.userSettings.canEdit = false;
          }
        });
    });
   }

   public getUserSettings = () => {
     return this.userSettings;
   }
}

export class UserSettings {
  canEdit: boolean = false;
  canDelete: boolean = false;
}