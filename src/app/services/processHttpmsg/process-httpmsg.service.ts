import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpmsgService {

  constructor(public http:Http ) {
    console.log('Hello ProcessHttpmsgProvider Provider');
   }

   public extractData(res:Response){
     
     let body =res.json();
     return body || {};
   }

   public handleError(error: Response |any){
     let errMsg:string;
     if(error instanceof Response){
       const body = error.json();
       const err = body.error || JSON.stringify(body);
       errMsg = `${error.status}-${error.statusText|| ''} ${err}`;
       
     }
     else{
       errMsg =error.message ? error.message : error.toString();
     }
     console.log(errMsg);
     return Observable.throw(errMsg);
   }
}
