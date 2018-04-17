import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShrinkingSegmentHeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shrinking-segment-header',
  templateUrl: 'shrinking-segment-header.html',
})
export class ShrinkingSegmentHeaderPage {

  section: string = 'two';
  somethings: any = new Array(20);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShrinkingSegmentHeaderPage');
  }

}
