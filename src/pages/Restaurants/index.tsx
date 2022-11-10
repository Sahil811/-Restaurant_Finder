import { useEffect, useState } from "react";
import axios from "axios";
import RowCard from "../../components/RowCard";
import { debounceHandler } from "../../utils";
import SearchBar from "@mkyy/mui-search-bar";
import MapView from "../../components/Map";
import "./index.scss";

const RestaurantsList: React.FC = () => {
  const [places, setPlace] = useState([]);

  const getPlaces = (query: string): void => {
    const endPoint: string = "https://api.foursquare.com/v2/venues/search?";

    const parameters = {
      client_id: "POKXMHQJY0EHTRGZEPMVWPJDWMUTSVRRINJILUSE5WZTSTUI",
      client_secret: "N4QKO4TTH4QKBFQ3SBYHUTQ5RUWMGAZ0B5JDYUE0H3V2W151",
      categoryId: "4d4b7105d754a06374d81259",
      ll: "35.66470143744811, 139.73781436564153",
      query,
      radius: "1000",
      v: "20180725",
      limit: "10",
      // section: "nextVenues",
      // near: "tokyo",
    };
    axios
      .get(`${endPoint}${new URLSearchParams(parameters).toString()}`)
      .then((response) => {
        setPlace(response?.data?.response?.venues);
      })
      .catch(() => {
        console.log("Error!");
      });
  };

  useEffect(() => {
    getPlaces("");
  }, []);

  console.log(places);
  return (
    <div className="restaurants">
      <div>
        <SearchBar
          className="restaurants__search"
          onChange={(value: string): void => {
            debounceHandler(() => getPlaces(value), 300);
          }}
          onSearch={() => {}}
          onCancelResearch={() => getPlaces("")}
        />
        <div className="restaurants__list">
          {places?.length > 0 &&
            places.map((place, index) => {
              return <RowCard key={index} data={place} />;
            })}
        </div>
      </div>
      <MapView data={places} />
    </div>
  );
};

export default RestaurantsList;
