import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private http: HttpClient) { }
  // Send contact me form to the API
  sendContactEmail(fullName: any, email:any, message: any){
    let url = '' // API endpoint

    let body = {
      "fullName": fullName,
      "email": email,
      "message": message
    }
    
    return this.http.post(url, body);
  }
}
