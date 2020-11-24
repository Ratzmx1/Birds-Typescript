export interface birdsData {
  name: { english: string; latin: string; spanish: string };
  images: { main: string };
  uid: string;
  sort: Number;
}

export interface InitialState {
  birds: { birds: Array<birdsData> };
  theme: { dark: Boolean };
}
