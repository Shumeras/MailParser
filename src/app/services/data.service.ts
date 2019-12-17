import { Injectable } from '@angular/core';
import { Email } from 'src/dataClasses/email';
import { Condition } from 'src/dataClasses/condition';
import { ParsedData } from 'src/dataClasses/parsedData';
import { saveAs } from 'file-saver';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() 
  { 
    if (DataService.emailService == null)
    {
      DataService.emailService = new EmailService;
    }
  }

  static conditionsData: Condition[] = [];
  static emailData: Email[] = [];
  static parsedData: ParsedData[] = [];

  static emailService: EmailService = null;

  static fillEmailData(messages: gapi.client.gmail.Message[]): Email[]
  {
    this.emailData = [];
    for(let m of messages)
    {
      this.emailData.push(Email.parseMessage(m));
    }
    return this.emailData;
  }

  static importEmailData(): Promise<any>
  {
    return this.emailService.getMessagesAsync()
      .then(
        (messages) =>
        {
          return this.fillEmailData(messages);
        }
      )
  }

  static loadEmailData(data: string): boolean
  {
    try
    {
      this.emailData = JSON.parse(data);
    }
    catch(err)
    {
      console.error(err);
      return false;
    }
    
    return true;
  }

  static saveEmailData(data = this.emailData): string
  {
    let s = JSON.stringify(data, null, 2);
    saveAs(new Blob([s], {type: "text/plain;charset=utf-8"}), 'EmailData.json');
    return s;
  }

  static saveConditionsData(data = this.conditionsData): string
  {
    let s = JSON.stringify(data,null,2);
    saveAs(new Blob([s], {type: "text/plain;charset=utf-8"}), 'ConditionsData.json');
    return s;
  }

  static loadConditionsData(data: string): boolean
  {
    try
    {
      this.conditionsData = (JSON.parse(data) as Condition[]);
      this.conditionsData.forEach(
        (condition) =>
        {
          //console.log(condition);
          Condition.setExpression(condition, condition.expression);
        }
      )
    }
    catch(err)
    {
      console.error(err);
      return false;
    }
    
    return true;
  }

  static saveParsedData(data : ParsedData[] = this.parsedData): string
  {
    let s = JSON.stringify(data, null, 2);
    saveAs(new Blob([s], {type: "text/plain;charset=utf-8"}), 'ParsedData.json');
    return s;
  }
  
  static exportParsedData(data : ParsedData[] = this.parsedData): string
  {
    if(data.length < 1)
    {
      return "";
    }

    let s = "@relation ParsedEmailData\n\n";
    
    let attributes: {name: string, isNominal: Boolean, values: string[]}[] = [];
    attributes.push( {name: "Id", isNominal: true, values: [] }); 
    console.log(data);
    
    //  Building attribute definitions
    for(let d of data)
    {
      attributes[0].values.push(d.emailID);
      for(let a of d.attributes)
      {
        // Create new attribute if it doesn't exist
        if(!attributes.find((t) => t.name == a.name))
        {
          attributes.push({name: a.name, isNominal: a.isNominal,values:[]});
        } 
      
        // If attribute is nominal and it's value does not yet exist in the list, we add it
        if(a.isNominal && !attributes.find((t) => t.name == a.name).values.includes(a.value.toString()))
        {
          attributes.find((t) => t.name == a.name).values.push(a.value.toString());
        }
      }
    }

    console.log(attributes);

    // Converting attribute definitions to string
    for(let a of attributes)
    {
      console.log(a);
      
      s += "@attribute '" + a.name +"' "
      if(a.isNominal)
      {
        s+="{"
        a.values.forEach(
          (v, i)=>
          {
            s+=v;
            if(i < a.values.length-1)
              s+=","
          }
        )
        s+="}"
      }
      else
      {
        s+="numeric"
      }
      s += "\n";
    }

    // Generating data
    s+="\n@data\n";
    for(let d of data)
    {
      attributes.forEach(
        (a, i) =>
        {
          if(a.name == "Id")
          {
            s+= d.emailID;
            return;
          }
          
          s+=',';
          let target = d.attributes.find((atr) => atr.name == a.name)
          if(!target)
            s+='?';
          else
            s+=target.value;
          
        }
      )
      s+="\n";
    }

    saveAs(new Blob([s], {type: "text/plain;charset=utf-8"}), 'ExportedParsedData.arff')
    return s;
  }

  static loadParsedData(data: string): boolean
  {
    try
    {
      this.parsedData = JSON.parse(data);
    }
    catch(err)
    {
      console.error(err);
      return false;
    }
    
    return true;
  }

}



