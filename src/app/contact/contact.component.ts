import { Component, OnInit } from '@angular/core';
import { SendEmailService } from '../services/send-email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  status = false;

  fullName!: string;
  email!: string;
  message!: string;

  email_sent = false;

  constructor(private sendEmailService: SendEmailService) { }

  ngOnInit(): void {
  }

  // Submit form to the backend
  submit(form:any){
    if(form.valid){
      this.sendEmailService.sendContactEmail(this.fullName, this.email, this.message).subscribe(
        (res: any) => {
          if(res.status)
          {
            this.email_sent = true;
            console.log("sent", this.fullName);
          } else{
            console.log("error");
          }
        }
      )
    }

  }

}
