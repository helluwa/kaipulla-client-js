import { AxiosInstance } from "axios";
import { KaipullaClientOptions, ServerType } from "./types/base-type";
import { getAxiosInstance } from "./http";
import { Email } from "./services/emial-service";

export class KaipullaClient {
    private httpClient: AxiosInstance;
    public email: Email

    constructor(options: KaipullaClientOptions) {
        this.httpClient = getAxiosInstance(options.url, options.apiToken)
        this.email = this._initEmailService(this.httpClient, options.serverType)
    }

    private _initEmailService(axiosInstance: AxiosInstance, serverType: ServerType) {
        return new Email(axiosInstance, serverType);
    }
}