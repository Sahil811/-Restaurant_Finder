import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { propType } from "./types";
import "./index.scss";

const MapView = ({ data }: propType): JSX.Element => {
  return (
    <div className="mapView">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[35.66470143744811, 139.73781436564153]}
        zoom={15}
        scrollWheelZoom={false}
      >
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
                <Popup>{restaurant?.name}</Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </div>
  );
};

export default MapView;
