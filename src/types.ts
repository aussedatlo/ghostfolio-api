export type GhostfolioApi = (
  accessToken: string,
  host?: string,
  port?: number,
) => {
  importData: (requestBody: ImportRequestBody) => Promise<void>;
  order: () => Promise<Activities>;
};

export type AuthResponseData = {
  authToken: string;
};

export const AssetClass = {
  CASH: 'CASH',
  COMMODITY: 'COMMODITY',
  EQUITY: 'EQUITY',
  FIXED_INCOME: 'FIXED_INCOME',
  REAL_ESTATE: 'REAL_ESTATE',
} as const;

export type AssetClass = keyof typeof AssetClass;

export const AssetSubClass = {
  BOND: 'BOND',
  COMMODITY: 'COMMODITY',
  CRYPTOCURRENCY: 'CRYPTOCURRENCY',
  ETF: 'ETF',
  MUTUALFUND: 'MUTUALFUND',
  PRECIOUS_METAL: 'PRECIOUS_METAL',
  PRIVATE_EQUITY: 'PRIVATE_EQUITY',
  STOCK: 'STOCK',
} as const;

export type AssetSubClass = keyof typeof AssetSubClass;

export const DataSource = {
  ALPHA_VANTAGE: 'ALPHA_VANTAGE',
  COINGECKO: 'COINGECKO',
  EOD_HISTORICAL_DATA: 'EOD_HISTORICAL_DATA',
  FINANCIAL_MODELING_PREP: 'FINANCIAL_MODELING_PREP',
  GOOGLE_SHEETS: 'GOOGLE_SHEETS',
  MANUAL: 'MANUAL',
  RAPID_API: 'RAPID_API',
  YAHOO: 'YAHOO',
} as const;

export type DataSource = keyof typeof DataSource;

export const Type = {
  BUY: 'BUY',
  DIVIDEND: 'DIVIDEND',
  ITEM: 'ITEM',
  LIABILITY: 'LIABILITY',
  SELL: 'SELL',
} as const;

export type Type = keyof typeof Type;

export const AccountType = {
  CASH: 'CASH',
  SECURITIES: 'SECURITIES',
} as const;

export type AccountType = keyof typeof AccountType;

export type Account = {
  accountType: AccountType;
  balance: number;
  comment: null | string;
  createdAt: string;
  currency: string;
  id: string;
  isDefault: boolean;
  isExcluded: boolean;
  name: string;
  platformId: string | null;
  updatedAt: string;
  userId: string;
  Platform: any;
};

export class ActivityImport {
  accountId?: string;
  assetClass?: AssetClass;
  assetSubClass?: AssetSubClass;
  comment?: string;
  currency: string;
  dataSource?: DataSource;
  date: string;
  fee: number;
  quantity: number;
  symbol: string;
  tags?: any[];
  type: Type;
  unitPrice: number;
  updateAccountBalance?: boolean;
}

export type Activity = {
  accountId: string;
  accountUserId: string;
  comment: null | string;
  createdAt: string;
  date: string;
  fee: number;
  id: string;
  isDraft: boolean;
  quantity: number;
  symbolProfileId: string;
  type: string;
  unitPrice: number;
  updatedAt: string;
  userId: string;
  Account: Account;
  SymbolProfile: any;
  tags: any[];
  value: number;
  feeInBaseCurrency: number;
  valueInBaseCurrency: number;
};

export type ImportRequestBody = {
  activities: ActivityImport[];
};

export type Activities = {
  activities: Activity[];
};
