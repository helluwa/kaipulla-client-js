import { KaipullaClient } from "./lib/kaipulla-client";
import { KaipullaClientOptions, KaipullaResponse } from "./lib/types/base-type";

const createKaipullaClient = (options: KaipullaClientOptions): KaipullaClient => {
    
    return new KaipullaClient(options)
}

export type {
    KaipullaClientOptions,
    KaipullaResponse
}

export { createKaipullaClient }