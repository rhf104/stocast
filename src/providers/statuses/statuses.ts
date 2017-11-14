import { Injectable } from '@angular/core';

import { ApiProvider } from '../api/api';

@Injectable()
export class StatusesProvider {

  constructor(public api: ApiProvider) { }

  getStatuses(params?: any) {
    return this.api.get('/statuses', params);
  }

}
