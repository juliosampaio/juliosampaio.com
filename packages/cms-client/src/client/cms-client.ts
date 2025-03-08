export interface CMSClient {
  getPages: () => Promise<string[]>;
  getPage: (pageName: string) => Promise<string>;
}
