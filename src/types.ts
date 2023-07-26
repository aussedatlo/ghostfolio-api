export type GhostfolioApi = (
  accessToken: string,
  host?: string,
  port?: number,
) => { importData: (requestBody: ImportRequestBody) => Promise<void> };

export type AuthResponseData = {
  authToken: string;
};

export type Activity = {
  currency: string;
  dataSource?: string;
  date: string;
  fee: number;
  quantity: number;
  symbol: string;
  type: string;
  unitPrice: number;
  accountId?: string;
};

export type ImportRequestBody = {
  activities: Activity[];
};
