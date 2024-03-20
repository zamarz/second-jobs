export type GetMPData = {
  items: Array<Array<Links | Value>>;
  links: Array<Links>;
  resultContext: string;
  skip: number;
  take: number;
  totalResults: number;
};

export type Links = {
  href: string;
  method: string;
  rel: string;
};
export type Value = {
  gender: string;
  id: number;
  latestHouseMembership: any;
  latestParty: any;
  nameAddressAs: string;
  nameDisplayAs: string;
  nameFullTitle: string;
  nameListAs: string;
  thumbnailUrl: string;
};

export type MPData = {
  value: Value;
  links: Array<Links>;
};

export type MPExpensesData = {
  link: Array<Links>;
  value: Array<ValueExpense>;
};

export type ValueExpense = {
  id: number;
  interests: Array<any>;
  name: string;
  sortOrder: number;
};

export type UpdateTotalEarnings = (value: number) => void;

export type Interest = {
  childInterests: Array<any>;
  createdWhen: any;
  deletedWhen: any;
  id: number;
  interest: string;
  isCorrection: boolean;
  lastAmendedWhen: string;
};
