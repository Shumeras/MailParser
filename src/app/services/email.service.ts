/// <reference path="../../../node_modules/@types/gapi/index.d.ts" />
/// <reference path="../../../node_modules/@types/gapi.auth2/index.d.ts"/>
/// <reference path="../../../node_modules/@types/gapi.client/index.d.ts"/>
/// <reference path="../../../node_modules/@types/gapi.client.gmail/index.d.ts"/>
import { NgZone, Injectable } from '@angular/core';
import { environment } from "../../environments/environment"
import { DataService } from './data.service';
import { Email } from 'src/dataClasses/email';


//declare var gapi: any;

// If modifying these scopes, delete token.json.
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  libsLoaded: boolean = false;

  constructor() 
  {
    this.loadLibs();    
  }

  private loadLibs(): void
  {
    gapi.load("client:auth2", {
      timeout: 5000,
      onerror:  (error) => { console.log(error);},
      ontimeout:() => { console.log("Timeout while loading libs.");},
      callback: () => 
      { 
        console.log("Success: loaded client:auth2 libs."); 
        gapi.client.load("gmail", "v1",
          () =>
          {
            console.log("Loaded gmail interface (v1).");
            this.libsLoaded = true;
          }
        );
      }
    });
    
  }

  private initClient() : Promise<any>
  {
    return gapi.client.init({
      apiKey: environment.API_KEY,
      clientId: environment.CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(
      () =>
      {
        console.log("Client initialized");
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }

  private signIn(): Promise<gapi.auth2.GoogleUser>
  {
    return gapi.auth2.getAuthInstance().signIn();
  }

  private signOut(): any
  {
    return gapi.auth2.getAuthInstance().signOut();
  }

  //Sadly max results only returns max 500 items per query, even if value is set higher
  private getMessageList(pageToken: string = '', maxMessages = 500, incJunk = true): Promise<gapi.client.Response<gapi.client.gmail.ListMessagesResponse>>
  {
    //@ts-ignore
    return gapi.client.gmail.users.messages.list({   
      'userId': 'me',
      'includeSpamTrash': incJunk,
      'maxResults': maxMessages,
      'pageToken': pageToken
    });
  }

  private getMessage(messageId: string): Promise<gapi.client.Response<gapi.client.gmail.Message>>
  {
    //@ts-ignore
    return gapi.client.gmail.users.messages.get({
      'userId': 'me',
      'id': messageId
    });
  }
  
  async getMessagesAsync(): Promise<gapi.client.gmail.Message[]>
  {  
    let messages: gapi.client.gmail.Message[] = [];
    let messageList: gapi.client.gmail.Message[] = [];
    await this.initClient()
    .then(() => this.signIn())
    .then(() =>
    { 
      // Seing as max results for list is 500 members have to do it in 2 parts
      // Getting part 1
      return this.getMessageList()
    })
    .then((res) =>
    {
      // Concat part 1 | Get part 2
      messageList = messageList.concat(res.result.messages);
      return this.getMessageList(res.result.nextPageToken);
    })
    .then((res) =>
    {
      // Concat part 2
      messageList = messageList.concat(res.result.messages);
    })
    .then(() =>
    {
      // Now we have to get the actual messages one my one using get
      // So I create a bunch of promises so they can be processed individualy
      let promises: Promise<gapi.client.Response<gapi.client.gmail.Message>>[] = [];
      for(let m of messageList)
      {
        promises.push(this.getMessage(m.id));
      }
      return Promise.all(promises);
    })
    .then((res) =>
    {
      // Now that we have the actual email, we just push the contents to the final array
      for(let m of res)
      {
        messages.push(m.result);
      }
    })
    .then(() => this.signOut());

    return messages;
  }
}


