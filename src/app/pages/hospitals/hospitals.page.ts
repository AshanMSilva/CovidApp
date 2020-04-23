import { Component, OnInit } from '@angular/core';
import { CurrentStatistical } from 'src/shared/currentStatistical';
import { CurrentStatisticalService } from 'src/app/services/currentStatistical/current-statistical.service';
import { HospitalData } from 'src/shared/hospitalData';
import { NavController } from '@ionic/angular';

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
    private navCtrl: NavController
  ) { }

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
