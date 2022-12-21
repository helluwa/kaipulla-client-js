import { AxiosInstance } from "axios";
import { KaipullaResponse, ServerType } from "../types/base-type";
import { MailContentType } from "../types/email-service-type";
import FormData from 'form-data'

export class Email {

    constructor(private httpClient: AxiosInstance, private serverType: ServerType) { }

    private _createFormData = (mailData: MailContentType): FormData => {
        const form = new FormData()
        form.append('to', mailData.to)
        form.append('subject', mailData.subject)
        if (mailData.text) {
            form.append('text', mailData.text)
        }
        if (mailData.html) {
            form.append('html', mailData.html)
        }
        form.append('cc', JSON.stringify(mailData.cc))
        form.append('bcc', JSON.stringify(mailData.bcc))

        return form
    }

    public sendText(mailData: Required<Pick<MailContentType, 'to' | 'text' | 'subject' | 'cc' | 'bcc'>>): Promise<KaipullaResponse> {
        return new Promise<KaipullaResponse>((resolve) => {
            if (this.serverType === 'remix') {
                this.httpClient.post<KaipullaResponse>('?service=email&type=text', this._createFormData(mailData)).then(res => {
                    if (res.data) {
                        resolve(res.data)
                    }
                }).catch(err => {
                    resolve(err)
                })
            } else {
                this.httpClient.post<KaipullaResponse>('?service=email&type=text', mailData).then(res => {
                    if (res.data) {
                        resolve(res.data)
                    }
                }).catch(err => {
                    resolve(err)
                })
            }
        })
    }

    public sendHtml(mailData: Required<Pick<MailContentType, 'to' | 'html' | 'subject' | 'cc' | 'bcc'>>): Promise<KaipullaResponse> {
        return new Promise<KaipullaResponse>((resolve) => {
            if (this.serverType === 'remix') {
                this.httpClient.post<KaipullaResponse>('?service=email&type=html', this._createFormData(mailData)).then(res => {
                    if (res.data) {
                        resolve(res.data)
                    }
                }).catch(err => {
                    resolve(err)
                })

            } else {
                this.httpClient.post<KaipullaResponse>('?service=email&type=html', mailData).then(res => {
                    if (res.data) {
                        resolve(res.data)
                    }
                }).catch(err => {
                    resolve(err)
                })
            }
        })
    }
} 