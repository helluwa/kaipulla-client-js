import { RemixHandler } from "../handlers/remix.handler";
import { KaipullaClientOptions, KaipullaResponse } from "../types/base-type";
import { MailContentType } from "../types/email-service-type";

export class Email {

    constructor(private options: KaipullaClientOptions) { }

    public async send(mailData: MailContentType): Promise<KaipullaResponse> {
        return new Promise<KaipullaResponse>(async (resolve) => {
            if (this.options.serverType === 'remix') {
                const remixhandler = new RemixHandler(this.options)
                const handlerResult = await remixhandler.handleMail(mailData)
                resolve(handlerResult)
            }
        })
    }
} 