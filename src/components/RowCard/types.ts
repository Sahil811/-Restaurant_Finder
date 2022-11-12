export interface propType {
  data: {
    id: string;
    name: string;
    location: {
      address: string;
      distance: number;
    };
  };
}
