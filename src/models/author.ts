export class Author {
  id: string;
  name: string;
  years: string;
  titles: string[];
  following: boolean;

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      this[f] = fields[f];
    }
  }

}
