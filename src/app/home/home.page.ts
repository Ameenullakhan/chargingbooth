import { Component } from '@angular/core';
// import { WifiWizard2 } from '@awesome-cordova-plugins/wifi-wizard-2/ngx';
declare var WifiWizard2: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public wifiSsid = 'Loading...';

  constructor() {

    // console.log(this.wifiWizard2.getConnectedSSID())
  }

  doGetWifiSsid(){
    WifiWizard2.getConnectedSSID().then((ssid) => {
      console.log("Get ssid success: " + ssid);
      this.wifiSsid = ssid;
    }).catch((err) => {
      console.log("Failed to get ssid, please check the error↓");
      console.error(err);
    });
  }

}
