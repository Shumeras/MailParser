import { Component, OnInit } from '@angular/core';
import { Email } from 'src/dataClasses/email';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  startupPage: boolean = true;
  pageIsLoading: boolean;

  selectedEmail: Email = null;
  emails: Email[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  startup(file :FileList = null): void
  {
    if(!this.startupPage)
      return;
    
    this.pageIsLoading = true;
    
    if(file != null)
    {
      let fr = new FileReader();
      fr.onload =
      () =>
      {
        if(DataService.loadEmailData(fr.result as string))
        {
          this.emails = DataService.emailData;
          this.startupPage = false;
        }
        this.pageIsLoading = false;
      }
      fr.readAsText(file[0], 'utf-8');
    }
    else
    {
      DataService.emailData = [];
      DataService.importEmailData()
        .then(
          (emails) =>
          {
            this.emails = DataService.emailData;
            this.pageIsLoading = false;
            this.startupPage = false;
            //console.log(emails);
          }
        )
    }
  }

  exportEmails(): void
  {
    DataService.saveEmailData();
  }

  deleteSelectedEmail(email: Email): void
  {
    if(this.selectedEmail == email)
      this.selectedEmail = null;
    
    this.emails.splice(this.emails.indexOf(email), 1);
    
    // Doing this so list updates due to virtual scroll bug
    this.emails = [...this.emails];
    DataService.emailData = this.emails;
  }
}
