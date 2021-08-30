import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrls } from '../api-urls';
import { MainserviceService } from './mainservice.service';

@Injectable({
  providedIn: 'root'
})
export class CommomserviceService {

  constructor(private mainService: MainserviceService) { }
  public poststudentinfo(data: object): Observable<any> {
    return this.mainService.postRequest(ApiUrls.studentinfo, data);
  }
  public getstudentinfo(data: object): Observable<any> {
    return this.mainService.getRequest(ApiUrls.studentinfo);
  }
  // public postaddressinfo(data: object): Observable<any> {
  //   return this.mainService.postRequest(ApiUrls.addressinfo, data);
  // }
}
