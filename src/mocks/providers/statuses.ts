import { Injectable } from '@angular/core';

import { Status } from '../../models/status';

@Injectable()
export class StatusesProvider {
  statuses: Status[] = [];

  defaultStatus: any = {
    "id": "833849208",
    "text": "this is a test status"
  };

  constructor() {
    let statuses = [
      {
        "id": "833849208",
        "text": "this is a test status"
      }
    ];

    for (let status of statuses) {
      this.statuses.push(status);
    }
  }

  // TODO: add title search mockup
  query(params?: any) {
    if (!params) {
      return this.statuses;
    }

    return this.statuses.filter((status) => {
      for (let key in params) {
        let field = status[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return status;
        } else if (field == params[key]) {
          return status;
        }
      }
      return null;
    });
  }

  add(status: Status) {
    this.statuses.push(status);
  }

  delete(status: Status) {
    this.statuses.splice(this.statuses.indexOf(status), 1);
  }
}
