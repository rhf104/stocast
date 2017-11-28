import { Component } from '@angular/core';
import { IonicPage, NavController, Refresher, ToastController } from 'ionic-angular';

import { SearchPage } from '../pages';
import { Status } from '../../models/status';
import { StatusesProvider, UserProvider } from "../../providers/providers";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchPage = SearchPage;

  statuses: Status[];

  constructor(public navCtrl: NavController,
              public statusData: StatusesProvider,
              public toastCtrl: ToastController,
              public user: UserProvider) {

  }

  ionViewDidLoad() {
    this.updateStatuses();
  }

  updateStatuses() {
    this.statusData.getStatuses().subscribe((statuses: Status[]) => {
      this.statuses = statuses;
    });
  }

  doRefresh(refresher: Refresher) {
    this.statusData.getStatuses().subscribe((statuses: Status[]) => {
      this.statuses = statuses;

      refresher.complete();
      const toast = this.toastCtrl.create({
        message: 'Statuses have been updated.',
        duration: 3000
      });
      toast.present();
    });
  }

  onLikeStatus(status: Status) {
    // this.statusData.likeStatus(status);
  }

}
