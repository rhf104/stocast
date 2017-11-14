import { Component, ViewChild } from '@angular/core';
import { ActionSheetController, IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';

import { AuthorsProvider, UserProvider } from '../../providers/providers';
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
    public authors: AuthorsProvider,
    public actionsheetCtrl: ActionSheetController,
    public user: UserProvider) {
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
   * Open unfollow action sheet if already following
   */
  onFollowButtonPress(author: Author) {
    if (author.following) {
      this.openUnfollowSheet(author);
    } else {
      this.authors.followAuthor(author.id);
    }
  }

  // TODO: add author detail page
  /**
   * Navigate to author detail page
   */
  openAuthor(author: Author) {
    // this.navCtrl.push('AuthorDetailPage', {
    //   author: author
    // });
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

  private openUnfollowSheet(author: Author) {
    let actionSheet = this.actionsheetCtrl.create({
      title: author.name,
      buttons: [
        {
          text: 'Unfollow',
          role: 'destructive',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
