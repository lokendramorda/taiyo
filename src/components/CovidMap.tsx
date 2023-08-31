import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface CountryInfo {
  lat: number;
  long: number;
  flag: string;
}

interface CountryData {
  updated: number;
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
}

const CovidMap: React.FC = () => {
  const [countriesData, setCountriesData] = useState<CountryData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<CountryData[]>(
        "https://disease.sh/v3/covid-19/countries"
      );
      setCountriesData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="lg:w-[70%] md:w-full sm:w-full  ml-auto mr-9 mb-20 mt-20 items-top items-center  flex flex-col z-0">
      <MapContainer
        center={[20, 0]}
        className="h-[70vh] w-[90%] rounded-2xl shadow-lg "
        zoom={2}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {countriesData.map((country) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={L.icon({
              iconUrl: country.countryInfo.flag,
              iconSize: [24, 16],
              iconAnchor: [15, 10],
              popupAnchor: [0, -10],
            })}
          >
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Active: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CovidMap;
