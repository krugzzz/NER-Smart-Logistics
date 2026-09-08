import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
const locations = { imphal: [24.817, 93.936], dimapur: [25.5788, 93.9368] };
const Route = () => {
  const [route, setRoute] = useState([]);
  const map = useMap();
  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const [originLon, originLat] = [
          locations.imphal[1],
          locations.imphal[0],
        ];
        const [destinationLon, destinationLat] = [
          locations.dimapur[1],
          locations.dimapur[0],
        ];
        const url =
          `https://router.project-osrm.org/route/v1/driving/` +
          `${originLon},${originLat};${destinationLon},${destinationLat}` +
          `?overview=full&geometries=geojson`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch route");
        }
        const data = await response.json();
        if (data.routes && data.routes.length > 0) {
          const coordinates = data.routes[0].geometry.coordinates.map(
            ([lon, lat]) => [lat, lon],
          );
          setRoute(coordinates);
          map.fitBounds(coordinates, { padding: [30, 30] });
        }
      } catch (error) {
        console.error("Route calculation failed:", error);
      }
    };
    fetchRoute();
  }, [map]);
  if (route.length === 0) {
    return null;
  }
  return <Polyline positions={route} weight={5} />;
};
const NERMap = ({ height = "600px" }) => {
  return (
    <div style={{ height }} className="w-full">
      {" "}
      <MapContainer
        center={[25.5, 93.5]}
        zoom={7}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        {" "}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />{" "}
        <Marker position={locations.imphal}>
          {" "}
          <Popup>
            {" "}
            <strong>Imphal</strong> <br /> Trip origin{" "}
          </Popup>{" "}
        </Marker>{" "}
        <Marker position={locations.dimapur}>
          {" "}
          <Popup>
            {" "}
            <strong>Dimapur</strong> <br /> Trip destination{" "}
          </Popup>{" "}
        </Marker>{" "}
        <Route />{" "}
      </MapContainer>{" "}
    </div>
  );
};
export default NERMap;
