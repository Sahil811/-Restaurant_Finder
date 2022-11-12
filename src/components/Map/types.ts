export interface propType {
  searchHandler: Function;
  data: Array<{
    id: string;
    map: Function;
    length: number;
    name: string;
    location: {
      lat: number;
      lng: number;
    };
  }>;
}
