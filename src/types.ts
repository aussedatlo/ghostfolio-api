export type AuthResponseData = {
  authToken: string;
};

export type Activity = {
  currency: string;
  dataSource: string;
  date: string;
  fee: number;
  quantity: number;
  symbol: string;
  type: string;
  unitPrice: number;
};

export type ImportRequestBody = {
  activities: Activity[];
};
