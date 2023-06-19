import React, { useRef } from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { GeoJSON } from "react-leaflet";
import CountryData from "../data/countries.json";
import { setMapTerm } from '../redux/countriesSlice';
import { useDispatch } from 'react-redux';

export default function Map() {
  const dispatch = useDispatch();
  const mapRef = useRef();
  const position = [20, 100];
  let countryStyle = {
    fillColor: "red",
    fillOpacity: 0.5,
    color: "black",
    weight: 2,
  };
  const changeCountry = (event) => {
    dispatch(setMapTerm(event.sourceTarget.feature.properties.ISO_A3.toLowerCase()));
    event.target.setStyle({
      fillColor: "Blue",
    })
  }
  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);
    layer.on({
      click: changeCountry,
    });
  };
  return (
    <>
      <MapContainer
              center={position}
              style={{ height: "80vh" }}
              zoom={2}
              scrollWheelZoom={false}
              ref={mapRef}
            >
              <GeoJSON
                style={countryStyle}
                data={CountryData.features}
                onEachFeature={onEachCountry}
              />
            </MapContainer>
    </>
  )
}
