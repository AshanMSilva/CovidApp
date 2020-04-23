import { Component, OnInit } from '@angular/core';
import { HospitalData } from 'src/shared/hospitalData';
import { ActivatedRoute } from '@angular/router';
import { AdMobFree, AdMobFreeInterstitialConfig, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage implements OnInit {
  hospitalData:HospitalData;
  constructor(
    private route: ActivatedRoute,
    private admobFree: AdMobFree
  ) {
    const interstitialConfig: AdMobFreeInterstitialConfig={
      id:"ca-app-pub-1607951085088367/2342893746",
      autoShow:true,
      
      
    };
    const bannerConfig: AdMobFreeBannerConfig={
      id:"ca-app-pub-1607951085088367/2467016824",
      autoShow:true,
      
      
    };
    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.interstitial.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
    this.admobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.hospitalData = JSON.parse(params.get("hospitalData"));
    });
  }

}
