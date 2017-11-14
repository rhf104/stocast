import { Injectable } from '@angular/core';

import { ApiProvider } from '../api/api';

@Injectable()
export class AuthorsProvider {

  constructor(public api: ApiProvider) { }

  query(params?: any) {
    return this.api.get('/authors', params);
  }

}
