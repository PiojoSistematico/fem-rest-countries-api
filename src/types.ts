export type CountryProps = {
  name: {
    common: string;
    official: string;
    nativeName?: string;
  };
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  independent?: boolean;
  status: {
    OfficiallyAssigned: string;
    UserAssigned: string;
  };
  unMember: boolean;
  currencies?: { [key: string]: string };
  idd: {
    root?: string;
    suffixes?: string[];
  };
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: string };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms?: {
    eng: {
      f: string;
      m: string;
    };
    fra?: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode?: {
    format: string;
    regex: string;
  };
  borders?: string[];
  cioc?: string;
  gini?: { [key: string]: number };
  fifa?: string;
};
