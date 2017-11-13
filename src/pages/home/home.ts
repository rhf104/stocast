import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { SearchPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchPage = SearchPage;

  constructor(public navCtrl: NavController) {

  }

}
