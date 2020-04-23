import { Component, OnInit } from '@angular/core';
import { CurrentStatistical } from 'src/shared/currentStatistical';
import { CurrentStatisticalService } from 'src/app/services/currentStatistical/current-statistical.service';
import { HospitalData } from 'src/shared/hospitalData';
import { NavController } from '@ionic/angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.page.html',
  styleUrls: ['./hospitals.page.scss'],
})
export class HospitalsPage implements OnInit {
  currentStatistical: CurrentStatistical;
  error:string;
  hospitalsData:HospitalData[];
  constructor(
    private currentStatisticalService: CurrentStatisticalService,
    private navCtrl: NavController,
    private admobFree: AdMobFree
  ) { 
    const bannerConfig: AdMobFreeBannerConfig={
      id:"ca-app-pub-1607951085088367/2658588511",
      autoShow:true,
      
      
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
  }

  ngOnInit() {
    this.currentStatisticalService.getCurrentStatistical().subscribe(statistics =>{ 
      this.currentStatistical = statistics;
      if(this.currentStatistical != undefined){
        this.hospitalsData = this.currentStatistical.data.hospital_data;
      }
    }, error => this.error=error);
  }
  goToHospitalData(hospitalData:HospitalData){
    this.navCtrl.navigateForward(['hospital',{hospitalData:JSON.stringify(hospitalData)}]);
  }

}
