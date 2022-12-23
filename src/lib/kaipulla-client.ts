import { KaipullaClientOptions } from "./types/base-type";
import { Email } from "./services/emial-service";

export class KaipullaClient {
    public email: Email

    constructor(options: KaipullaClientOptions) {
        this.email = this._initEmailService(options)
    }

    private _initEmailService(options) {
        return new Email(options);
    }
}