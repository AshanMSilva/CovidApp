import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    private admobFree: AdMobFree,
    private emailComposer: EmailComposer
    //private facultyService:FacultyService
  ) { 
    const interstitialConfig: AdMobFreeInterstitialConfig={
      isTesting:true,
      autoShow:true,
      
      
    };
    this.admobFree.interstitial.config(interstitialConfig);

    this.admobFree.interstitial.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
  }

  ngOnInit(){
    // this.faculties=this.facultyService.getFacultiesByUniId(1);
    // console.log(this.faculties);
  }
  sendEmail(){
    let email = {
      to:'teamiota.uom@gmail.com',
      subject: 'Regarding about GPA Calculator',
      body: 'Dear Sir/Madam:',
      isHtml:true
    };

    this.emailComposer.open(email);
  }
}