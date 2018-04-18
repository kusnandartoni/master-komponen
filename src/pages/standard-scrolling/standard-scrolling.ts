import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StandardScrollingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-standard-scrolling',
  templateUrl: 'standard-scrolling.html',
})
export class StandardScrollingPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    for(let i = 0; i< 2000; i++){
      let item = {
        title: 'Title',
        body: 'body',
        avatarUrl: 'https://avatars.io/facebook/random'+i
      };

      this.items.push(item);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandardScrollingPage');
  }

}
