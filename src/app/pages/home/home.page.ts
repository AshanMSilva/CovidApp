import { Component, OnInit } from '@angular/core';
import { CurrentStatisticalService } from 'src/app/services/currentStatistical/current-statistical.service';
import { CurrentStatistical } from 'src/shared/currentStatistical';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  currentStatistical: CurrentStatistical;
  error:string;
  constructor(
    private currentStatisticalService: CurrentStatisticalService
  ) { }

  ngOnInit() {
    this.currentStatisticalService.getCurrentStatistical().subscribe(data =>this.currentStatistical =data, errmess =>this.error=<any>errmess);
    
  }

}
