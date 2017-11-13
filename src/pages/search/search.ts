import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';

import { Authors } from '../../providers/providers';
import { Author } from '../../models/author';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  @ViewChild(Searchbar) searchbar: Searchbar;

  currentAuthors: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authors: Authors) {
  }

  /**
   * Perform a search for authors to follow.
   */
  searchAuthors(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentAuthors = [];
      return;
    }
    this.currentAuthors = this.authors.query({
      name: val
    });
  }

  /**
   * Navigate to author detail page
   */
  openAuthor(author: Author) {
    this.navCtrl.push('AuthorDetailPage', {
      author: author
    });
  }

  /**
   * Return formatted list of author's titles
   */
  getFormattedTitles(titles: string[]) {
    return titles.join(', ');
  }

  /**
   * Hide search bar when navigating backwards to prevent ugly transition.
   */
  ionViewWillLeave() {
    this.searchbar.getNativeElement().hidden = true;
  }
}
