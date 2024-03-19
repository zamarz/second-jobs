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
