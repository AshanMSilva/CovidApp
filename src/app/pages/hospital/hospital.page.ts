import { Component, OnInit } from '@angular/core';
import { HospitalData } from 'src/shared/hospitalData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage implements OnInit {
  hospitalData:HospitalData;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.hospitalData = JSON.parse(params.get("hospitalData"));
    });
  }

}
