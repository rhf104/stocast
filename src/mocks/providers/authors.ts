import { Injectable } from '@angular/core';

import { Author } from '../../models/author';

@Injectable()
export class AuthorsProvider {
  authors: Author[] = [];

  defaultAuthor: any = {
    "id": "231230198",
    "name": "Oscar Wilde",
    "years": "1854–1900",
    "titles": [
      "The Importance of Being Earnest",
      "The Picture of Dorian Gray"
    ],
    "following": true
  };

  constructor() {
    let authors = [
      {
        "id": "833849208",
        "name": "Franz Kafka",
        "years": "1883–1924",
        "titles": [
          "The Metamorphosis",
          "The Trial",
          "The Castle"
        ],
        "following": false
      },
      {
        "id": "231230198",
        "name": "Oscar Wilde",
        "years": "1854–1900",
        "titles": [
          "The Importance of Being Earnest",
          "The Picture of Dorian Gray"
        ],
        "following": true
      }
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
