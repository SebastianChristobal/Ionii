
export interface IDocument{
    ['@odata.etag']?: string;
    ['@odata.type']?: string;
    ['@odata.id']?: string;
    ['@odata.editLink']?: string;
    FileSystemObjectType?: number;
    ServerRedirectedEmbedUri?: string;
    Title?: string;
    Id?: string;
    GUID?:string;
   
}

export interface IDocumentCollection{
    value: IDocument[];
}

