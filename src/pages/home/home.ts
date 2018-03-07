import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import {UlsterPage} from '../ulster/ulster';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( private flashlight: Flashlight) {

  }
openUlster(){
  // this.navCtrl.push(UlsterPage);
  this.flashlight.switchOn();
}
}
