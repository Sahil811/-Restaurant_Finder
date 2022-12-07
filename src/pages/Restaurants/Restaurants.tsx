import {
  useEffect,
  useState,
  useCallback,
  useRef,
  MutableRefObject,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import RowCard from "../../components/RowCard/RowCard";
import { debounceHandler } from "../../utils";
import SearchBar from "@mkyy/mui-search-bar";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import MapView from "../../components/MapView/MapView";
import { restaurantsListActionCreator } from "../../redux/slices/restaurants";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import "./Restaurants.scss";

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

  const [toggleButton, setToggleButton] = useState<boolean>(false);

  const sidebarRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

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

  const openNav = (): void => {
    if (sidebarRef?.current != null) {
      sidebarRef.current.style.display = "block";
      setToggleButton(false);
    }
  };

  const closeNav = (): void => {
    if (sidebarRef?.current != null) {
      sidebarRef.current.style.display = "none";
      setToggleButton(true);
    }
  };

  return (
    <div className="restaurants" data-testid="restaurantsListContent">
      {error !== null ? (
        <h1>Oops something went wrong. Please try again.</h1>
      ) : (
        <>
          {toggleButton && (
            <div className="sidebar__open">
              <RestaurantMenuOutlinedIcon fontSize="large" onClick={openNav} />
            </div>
          )}
          <div ref={sidebarRef}>
            <div className="sidebar__close">
              <ClearOutlinedIcon onClick={closeNav} />
            </div>
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
