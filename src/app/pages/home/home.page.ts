import { Component, OnInit } from '@angular/core';
import { CurrentStatisticalService } from 'src/app/services/currentStatistical/current-statistical.service';
import { CurrentStatistical } from 'src/shared/currentStatistical';
import { AdMobFree, AdMobFreeInterstitialConfig, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  currentStatistical: CurrentStatistical;
  error:string;
  segmentValue:string;
  constructor(
    private currentStatisticalService: CurrentStatisticalService,
    private admobFree: AdMobFree
  ) {
    const interstitialConfig: AdMobFreeInterstitialConfig={
      id:"ca-app-pub-1607951085088367/2003982397",
      autoShow:true,
      
      
    };
    const bannerConfig: AdMobFreeBannerConfig={
      id:"ca-app-pub-1607951085088367/7719343506",
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
    this.segmentValue="local";
    this.currentStatisticalService.getCurrentStatistical().subscribe(data =>this.currentStatistical =data, errmess =>this.error=<any>errmess);
    
  }
  segmentChanged(ev: any) {
    this.segmentValue = ev.detail.value;
  }
  doRefresh(event) {
    this.segmentValue="local";
    this.currentStatisticalService.getCurrentStatistical().subscribe(data =>this.currentStatistical =data, errmess =>this.error=<any>errmess);

    setTimeout(() => {
      
      event.target.complete();
    }, 2000);
  }
  

}
