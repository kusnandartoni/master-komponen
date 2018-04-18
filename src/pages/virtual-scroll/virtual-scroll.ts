import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VirtualScrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-virtual-scroll',
  templateUrl: 'virtual-scroll.html',
})
export class VirtualScrollPage {
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
    console.log(this.items);
  }

}
