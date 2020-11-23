export interface birdsData {
  name: { english: String; latin: String; spanish: String };
  images: { main: String };
  uid: String;
  sort: Number;
}

export interface InitialState {
  birds: { birds: Array<{ birdsData }> };
  theme: { dark: Boolean };
}
