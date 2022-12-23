import { KaipullaClientOptions, KaipullaResponse } from "../types/base-type";
import { MailContentType } from "../types/email-service-type";
import FormData from 'form-data'
import axios from 'axios'
import concat from 'concat-stream'

export class RemixHandler {

    constructor(private clientOptions: KaipullaClientOptions) { }

    public async handleMail(mailData: MailContentType): Promise<KaipullaResponse> {
        return new Promise<KaipullaResponse>((resolve) => {
            const form = new FormData()
            form.append('to', mailData.to)
            form.append('subject', mailData.subject ? mailData.subject : '')
            form.append('text', mailData.text ? mailData.text : '')
            form.append('html', mailData.html ? mailData.html : '')
            form.append('cc', JSON.stringify(mailData.cc ? mailData.cc : []))
            form.append('bcc', JSON.stringify(mailData.bcc ? mailData.bcc : []))
            form.pipe(concat(data => {
                const headers = {
                    'Authorization': `Bearer ${this.clientOptions.apiToken}`,

                    ...form.getHeaders()
                };

                axios<KaipullaResponse>({ method: 'post', url: `${this.clientOptions.url}?service=email`, data, headers }).then(res => {
                    resolve(res.data)
                })
            }))
        })
    }
}