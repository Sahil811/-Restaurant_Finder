export interface reviewCardpropType {
  data: {
    id: Number;
    photourl: string;
    createdAt: Date | number;
    map: Function;
    length: number;
    text: string;
    user: {
      firstName: string;
      lastName: string;
    };
  };
}
