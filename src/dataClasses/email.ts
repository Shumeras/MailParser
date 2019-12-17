// This produces some issues due to Buffer not existing in browser vs Node.js
// Fixed (jankily) in polyfills.ts
import base64url from 'base64url';

export class Email 
{
    // MIME example hierachies

    // Plain Email
    //     text/plain

    // HTML Email
    //     multipart/alternative
    //         text/plain
    //         text/html
    
    // HTML Email with embedded image
    //     multipart/related
    //         multipart/alternative
    //             text/plain
    //             text/html
    //         image/png (embedded image)

    // HTML Email with embedded image and attachment
    //     multipart/mixed
    //         multipart/related
    //             multipart/alternative
    //                 text/plain
    //                 text/html
    //             image/png (embedded image)
    //         image/png (attached image)

    // HTML Email with attachment
    //     multiplart/mixed
    //         multipart/alternative
    //             text/plain
    //             text/html
    //         image/png (attached image)

    static parseMessage(message: gapi.client.gmail.Message): Email
    {
        let email = new Email();
        email.id = message.id;
        email.labels = message.labelIds;
        email.internalDate = message.internalDate;

        // Parese headers
        for(let head of message.payload.headers)
        {
            if(head.name == "From")
                email.sender = head.value;
            else if(head.name == "To")
                email.target = head.value;
            else if(head.name == "Subject")
                email.subject = head.value;
        }
        email.snippet = message.snippet;

        
        if(message.payload.mimeType == "multipart/alternative") 
            for(let part of message.payload.parts)
            {
                if(part.mimeType == "text/plain")
                {
                    email.contentPlainSize = part.body.size;
                    email.contentPlain = base64url.decode(part.body.data);
                }
                else if(part.mimeType == "text/html")
                {
                    email.contentHTMLSize = part.body.size;
                    email.contentHTML = base64url.decode(part.body.data);
                }
                else
                {
                    email.attachments.push({id: part.partId, name: part.filename, size: part.body.size, type: part.mimeType})
                }
            }
        else if(message.payload.mimeType == "text/plain")
        {
            email.contentPlainSize = message.payload.body.size;
            email.contentPlain = base64url.decode(message.payload.body.data);
        }
        else if (message.payload.mimeType == "text/html")
        {
            email.contentHTMLSize = message.payload.body.size;
            email.contentHTML = base64url.decode(message.payload.body.data);
        }
        else
            console.warn("Unknown mimeType in message: " + message.id + "; Message type: " + message.payload.mimeType);
            
            
        return email;
    }

    id: string;
    
    // Header
    labels: string[] = [];
    internalDate: string;
    sender: string;
    target: string;
    
    // Body
    subject: string;
    snippet: string;
    contentPlain: string;
    contentPlainSize: number;
    contentHTML: string;
    contentHTMLSize: number;

    // Attachments
    attachments: Attachment[] = [];

}

export class Attachment{
    id: string;
    name: string;
    type: string;
    size: number;
}

   