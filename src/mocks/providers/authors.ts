import { Injectable } from '@angular/core';

import { Author } from '../../models/author';

@Injectable()
export class Authors {
  authors: Author[] = [];

  defaultAuthor: any = {
    "name": "Franz Kafka",
    "years": "1883–1924",
    "titles": [
      "The Metamorphosis",
      "The Trial",
      "The Castle"
    ],
  };

  constructor() {
    let authors = [
      {
        "name": "Franz Kafka",
        "years": "1883–1924",
        "titles": [
          "The Metamorphosis",
          "The Trial",
          "The Castle"
        ],
      },
    ];

    for (let author of authors) {
      this.authors.push(author);
    }
  }

  // TODO: add title search mockup
  query(params?: any) {
    if (!params) {
      return this.authors;
    }

    return this.authors.filter((author) => {
      for (let key in params) {
        let field = author[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return author;
        } else if (field == params[key]) {
          return author;
        }
      }
      return null;
    });
  }

  add(author: Author) {
    this.authors.push(author);
  }

  delete(author: Author) {
    this.authors.splice(this.authors.indexOf(author), 1);
  }
}
