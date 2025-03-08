import type { CMSClient } from "../cms-client";

export class NotionClient implements CMSClient {
  getPage(pageName: string): Promise<string> {
    return Promise.resolve(`Page content for ${pageName}`);
  }
  getPages(): Promise<string[]> {
    return Promise.resolve(["Page1", "Page2"]);
  }
}
