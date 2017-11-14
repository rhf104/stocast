import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Status } from '../../models/status';

@Injectable()
export class StatusesProvider {
  statuses: Status[] = [];

  defaultStatus: any = {
    "id": "833849208",
    "text": "this is a test status",
    "author": {
      "id": "231230198",
      "name": "Oscar Wilde",
      "years": "1854–1900",
      "titles": [
        "The Importance of Being Earnest",
        "The Picture of Dorian Gray"
      ],
      "following": true
    }
  };

  constructor() {
    let statuses = [
      {
        "id": "833849208",
        "text": "this is a test status",
        "author": {
          "id": "231230198",
          "name": "Oscar Wilde",
          "years": "1854–1900",
          "titles": [
            "The Importance of Being Earnest",
            "The Picture of Dorian Gray"
          ],
          "following": true
        }
      },
      {
        "id": "12331231",
        "text": "here's another one lol",
        "author": {
          "id": "231230198",
          "name": "Oscar Wilde",
          "years": "1854–1900",
          "titles": [
            "The Importance of Being Earnest",
            "The Picture of Dorian Gray"
          ],
          "following": true
        }
      }
    ];

    for (let status of statuses) {
      this.statuses.push(status);
    }
  }

  getStatuses(params?: any): Observable<Status[]> {
    if (!params) {
      return Observable.of(this.statuses);
    }

    return Observable.of(this.statuses);
  }

  likeStatus(status: Status) {

  }

}
