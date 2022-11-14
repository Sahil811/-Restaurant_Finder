import { useEffect } from "react";
import { useMap, MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-geosearch/dist/geosearch.css";
import { propType } from "./types";
import "./index.scss";

const SearchField = ({ searchHandler }: { searchHandler: Function }): null => {
  const provider = new OpenStreetMapProvider();

  // @ts-expect-error
  const searchControl = new GeoSearchControl({
    provider,
    showMarker: false, // optional: true|false  - default true
    showPopup: false, // optional: true|false  - default false
  });

  const map = useMap();
  useEffect((): void => {
    map.addControl(searchControl);
    map.on("geosearch/showlocation", (res): void => {
      // @ts-expect-error
      searchHandler(`${Number(res?.location?.y)},${Number(res?.location?.x)}`);
    });
    // @ts-expect-error
    return () => map.removeControl(searchControl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

const MapView = ({ data, searchHandler }: propType): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="mapView">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[35.66470143744811, 139.73781436564153]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <SearchField searchHandler={searchHandler} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.length > 0 &&
          data?.map((restaurant): JSX.Element => {
            return (
              <Marker
                key={restaurant?.id}
                position={[
                  restaurant?.location?.lat,
                  restaurant?.location?.lng,
                ]}
              >
                <Popup>
                  <button
                    className="mapView__popUpButton"
                    onClick={() => {
                      navigate(`/restaurant/${String(restaurant.id)}`);
                    }}
                  >
                    {restaurant?.name}
                  </button>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </div>
  );
};

export default MapView;
