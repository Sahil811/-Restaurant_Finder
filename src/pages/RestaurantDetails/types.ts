export interface venueDetailspropType {
  name: string;
  rating: number;
  bestPhoto: {
    prefix: string;
    suffix: string;
  };
  location: {
    address: string;
    crossStreet: string;
    city: string;
    country: string;
  };
  tips: {
    groups: Array<{
      items: Array<{
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
      }>;
    }>;
  };
}
