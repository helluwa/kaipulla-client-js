export type ServerType = 'remix' | 'express'

export type KaipullaClientOptions = {
    url: string;
    apiToken: string;
    serverType: ServerType
    headers?: { [key: string]: string };
};

export type KaipullaResponse = {
    success: boolean
    data?: any
    error?: any
}
