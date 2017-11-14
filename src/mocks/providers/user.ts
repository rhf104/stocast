import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';

import { User } from '../../models/User';

@Injectable()
export class UserProvider {
  private user: User;

  private defaultUser: any = {
    "id": "231230198"
  };

  constructor() { }

  signIn(accountInfo: any) {
    let res = Observable.of({ status: 'success', user: this.defaultUser }).share();
    res.subscribe((res: any) => {
      if (res.status == 'success') {
        this.signedIn(res);
      } else {

      }
    }, err => {
      console.error('Error signing in', err);
    });
    return res;
  }

  signOut() {
    this.user = null;
  }

  private signedIn(resp) {
    this.user = resp.user;
  }

}
