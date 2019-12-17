import { Email } from "./email";
import { evaluate } from 'mathjs';

export class Condition
{
    name: string;
    
    expression: string;

    targetAttachments: boolean = false;
    targetHTMLBody: boolean = false;
    targetPlainBody: boolean = false;
    targetSubject: boolean = false;
    targetSender: boolean = false;

    targetPlainSize: boolean = false;
    targetHTMLSize: boolean = false;
    targetAttachmentSize: boolean = false;
    targetAttachmentCount: boolean = false;

    targetLabels: boolean = false;  //This one is a little bit cheaty

    isManual : boolean = false;     // If is manual the value for this field should be entered by user
    
    isNominal : boolean = false;    // If is nominal will try to produce nominal value
    isMath : boolean = false;        // If math is true runs result through math parser
    isBool: boolean = false;        // If bool is true interprets the result as true if math and >0 or if not math and non empty result
    
    zeroToUndefined: boolean = false;

    // These two values will be serialized, but their value in storage doesn't matter as once the data is loaded
    // they are racalculated due to the fact that RegExp objects aren't stringified. Just don't have time to 
    // write a separate data object for serialization.
    private parsedExpression: string = "";       
    private regExpressions: RegExp[] = [];

    static parseEmail(con: Condition, target: Email) : string | number
    {
        let targetText : string;
        let result: string = "";

        if(con.isManual)
            return;
        else
            targetText = Condition.getTargetedText(con, target);

        result = Condition.parseText(con, targetText); 

        // Appending size and count values 
        if(con.targetAttachmentCount)
            result += target.attachments.length.toString();
        
        if(con.targetAttachmentSize)
        {
            let size = 0;
            target.attachments.forEach(
                element => {
                    size += element.size;
                }
            )
            result += size.toString();
        }

        if(con.targetHTMLSize)
            result += target.contentHTMLSize;
        
        if(con.targetPlainSize)
            result += target.contentPlainSize;

        // Formatting result
        try{
            if(con.isBool)
                if(con.isMath)
                    result = evaluate(result)>0 ? '1' : '0'; 
                else
                    return (result.length > 0) ? '1' : '0';

            if(con.isMath)
                result = evaluate(result).toString(); 
        }
        catch(error)
        {
            console.log(error);
            return 0;
        }

        if(con.zeroToUndefined && (result == '0' || result == ''))
            result = '?';

        return result;
    }

    private static getTargetedText(con: Condition, target: Email): string
    {
        let targetText = ""

        if(con.targetSubject)
            targetText += target.subject;
        
        if(con.targetAttachments)
            target.attachments.forEach(element => {
                targetText += element.name;
            });
        
        if(con.targetHTMLBody)
            targetText += target.contentHTML;

        if(con.targetPlainBody)
            targetText += target.contentPlain;
        
        if(con.targetSender)
            targetText += target.sender;

        if(con.targetLabels)
            target.labels.forEach((l) => targetText+=" "+l);


        return targetText;
    }
    
    private static parseText(con: Condition, text: string) : string
    {
        let result = con.parsedExpression;
        // Replacing indexing values with matching regEx counts
        for(let i = 0; i < con.regExpressions.length; i++)
        {
           // console.log(result.match( '#'+i+' '));
            let matches = text.match(con.regExpressions[i]);
            result = result.replace( '#'+i+' ', matches == null ? '0' : matches.length.toString());
        }

        return result;
    }

    

    static setExpression(con: Condition, expr: string): void {
        con.expression = expr;
        con.regExpressions = [];
        con.parsedExpression = "";

        let regExStarted : Boolean = false; 
        let currentRegExFragment : string = "";

        for(let char of expr)
        {
            if(char == '#')
            {
                if(!regExStarted)
                    regExStarted = true;
                else
                {
                    try {
                        con.regExpressions.push(new RegExp(currentRegExFragment,'g'))
                        con.parsedExpression += '#' + (con.regExpressions.length-1) + ' ';
                    } catch (error) {
                        console.log(error);
                    }
                    currentRegExFragment = "";
                    regExStarted = false;
                }
            }
            else
            {
                if(!regExStarted)
                    con.parsedExpression += char;
                else
                    currentRegExFragment += char;
            }
        }
    }
    
}


