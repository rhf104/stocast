export class Author {
  name: string;
  years: string;
  titles: string[];

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      this[f] = fields[f];
    }
  }

}
