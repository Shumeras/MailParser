import { Condition } from './condition';
import { Email } from './email';

export class ParsedData
{
    emailSubject: string;
    emailID: string;
    attributes: {
        name : string,
        isManual: boolean,
        isNominal: boolean,
        value : string | number
    }[];
    
    static buildParsedData(emails : Email[], conditions: Condition[]): ParsedData[]
    {
        let result : ParsedData[] = [];
        
        for(let e of emails)
        {
            let temp : ParsedData = new ParsedData();
            temp.emailID = e.id;
            temp.emailSubject = e.subject;
            temp.attributes = [];
            for(let c of conditions)
            {

                temp.attributes.push({
                    name: c.name,
                    value: (c.isManual? c.expression : Condition.parseEmail(c, e)),
                    isManual: c.isManual,
                    isNominal: c.isNominal
                })
            }
            result.push(temp);
        }

        return result;
    }


}
