import { Author } from './author';

export class Status {
  id: string;
  text: string;
  author: Author;

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      this[f] = fields[f];
    }
  }

}
