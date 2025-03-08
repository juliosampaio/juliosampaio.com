import { NotionClient } from "./notion/notion-client";
import type { CMSClient } from "./cms-client";

export const API_VERSION: number = 1;

export const createClient = (): CMSClient => new NotionClient();
