import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  apiURL: string = 'http://www.mocky.io/v2/5c5455503200000e00f7f6cd';
  constructor(private httpClient: HttpClient) { 
    
  }

  public getCustomerById(){
    return this.httpClient.get(this.apiURL);
  }
}
