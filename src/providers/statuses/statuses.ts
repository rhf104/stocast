import { Injectable } from '@angular/core';

import { ApiProvider } from '../api/api';
import { Status } from '../../models/status';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StatusesProvider {

  constructor(public api: ApiProvider) { }

  getStatuses(params?: any): Observable<Status[]> {
    return this.api.get('statuses', params)
      .map(statuses => statuses.statuses);
  }

}
