import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import RowCard from "../../components/RowCard";
import { debounceHandler } from "../../utils";
import SearchBar from "@mkyy/mui-search-bar";
import MapView from "../../components/Map";
import { searchParamsType } from "../types";
import "./index.scss";

const RestaurantsList: React.FC = () => {
  const [searchLocation, seSearchLocation] = useState<string>(
    "35.66470143744811,139.73781436564153", // Cogent Labes
  );

  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const [places, setPlace] = useState([]);

  const getVenuesHandler = useCallback(
    (query: string): void => {
      const endPoint: string = "https://api.foursquare.com/v2/venues/search?";

      const parameters: searchParamsType = {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECREATE,
        categoryId: "4d4b7105d754a06374d81259",
        ll: searchLocation,
        query,
        radius: "1000",
        v: "20180725",
        limit: "10",
      };
      axios
        // @ts-expect-error
        .get(`${endPoint}${new URLSearchParams(parameters).toString()}`)
        .then((response) => {
          setPlace(response?.data?.response?.venues);
        })
        .catch(() => {
          setErrorMessage("Oops something went wrong. Please try again.");
        });
    },
    [searchLocation],
  );

  useEffect(() => {
    getVenuesHandler("");
  }, [searchLocation, getVenuesHandler]);

  return (
    <div className="restaurants">
      {errorMessage !== null ? (
        <h1>{errorMessage}</h1>
      ) : (
        <>
          <div>
            <SearchBar
              className="restaurants__search"
              // @ts-expect-error
              onChange={(value: string): void => {
                debounceHandler(() => getVenuesHandler(value), 300);
              }}
              onSearch={() => {}}
              onCancelResearch={() => getVenuesHandler("")}
            />
            <div className="restaurants__list">
              {places?.length > 0 ? (
                places.map((place, index) => {
                  return <RowCard key={index} data={place} />;
                })
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
          <MapView data={places} searchHandler={seSearchLocation} />
        </>
      )}
    </div>
  );
};

export default RestaurantsList;
