export type MailContentType = {
    to: string
    subject: string
    text?: string
    html?: string
    cc?: string[]
    bcc?: string[]
    attachments?: any
}