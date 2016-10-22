export interface SiteInterface {
    id: number;
    name: string;
    slug: string;
    url: string;
    ui: string;
    status: boolean;
}


export interface SiteVersionInterface {
    id: number;
    version: string;
    status: boolean;
    ui: any;
    created_at: string;
}
