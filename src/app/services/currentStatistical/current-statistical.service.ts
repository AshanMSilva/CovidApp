import { Injectable } from '@angular/core';
import { Observable } from "rxjs/observable";
import { Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { from } from 'rxjs';
import { ProcessHttpmsgService } from '../processHttpmsg/process-httpmsg.service';
import { baseURL } from 'src/shared/baseurl';
import { CurrentStatistical } from 'src/shared/currentStatistical';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CurrentStatisticalService {
  
  constructor(
    private processHttpmsgService: ProcessHttpmsgService,
    public http: Http
  ) {

   }
  getCurrentStatistical(): Observable<CurrentStatistical>{
    return this.http.get(baseURL+'api/get-current-statistical').map(res=>{return this.processHttpmsgService.extractData(res)}).catch(error=>{return this.processHttpmsgService.handleError(error)});
  }
  
}
