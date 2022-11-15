import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import RowCard from "../../components/RowCard";
import { debounceHandler } from "../../utils";
import SearchBar from "@mkyy/mui-search-bar";
import MapView from "../../components/Map";
import { restaurantsListActionCreator } from "../../redux/slices/restaurants";
import "./index.scss";

const RestaurantsList: React.FC = () => {
  const dispatch = useDispatch();
  const {
    list: places,
    loading,
    error,
    // @ts-expect-error
  } = useSelector((state) => state.restaurantsData);
  const [searchLocation, seSearchLocation] = useState<string>(
    "35.66470143744811,139.73781436564153", // Cogent Labes
  );

  const getVenuesHandler = useCallback(
    (query: string) =>
      dispatch(
        // @ts-expect-error
        restaurantsListActionCreator({
          searchLocation,
          query,
        }),
      ),
    [searchLocation, dispatch],
  );

  useEffect(() => {
    getVenuesHandler("");
  }, [searchLocation, getVenuesHandler]);

  return (
    <div className="restaurants" data-testid="restaurantsListContent">
      {error !== null ? (
        <h1>Oops something went wrong. Please try again.</h1>
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
            <div data-testid="restaurants__list" className="restaurants__list">
              {loading === true ? (
                <div>Loading...</div>
              ) : (
                places?.map(
                  (
                    place: {
                      id: string;
                      name: string;
                      location: { address: string; distance: number };
                    },
                    index: any,
                  ) => {
                    return (
                      <RowCard data-testid="rowCard" key={index} data={place} />
                    );
                  },
                )
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
