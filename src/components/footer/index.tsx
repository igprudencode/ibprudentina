"use client"

import { useCallback, useMemo, useState } from "react";

import {
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";

import { Container, ContentContainer, InformationContainer, InformationItem, LinksContainer, MapContainer } from "./styles";

import { InformationData, LinksData } from "./data";

export default function Footer() {
  const [map, setMap] = useState();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
  })

  const coordinates = useMemo(() => ({
    lat: -22.1167267,
    lng: -51.3906263,
  }), []);

  const containerStyle = {
    width: '100%',
    minWidth: '220px',
    maxWidth: '350px',
    minHeight: '350px',
  };

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(coordinates);
    map.fitBounds(bounds);

    setMap(map)
  }, [coordinates])

  return (
    <Container>
      <ContentContainer>
        <InformationContainer>
          <h3>Igreja Batista Prudentina</h3>
          {InformationData.map((item, id) => {
            return (
              <InformationItem key={id}>
                {item.icon}
                <a href={item.href}>{item.text}</a>
              </InformationItem>
            );
          })}
        </InformationContainer>
        <LinksContainer>
          <h3>Links</h3>
          {LinksData.map((item, id) => {
            return (
              <a key={id} href={item.href}>{item.text}</a>
            )
          })}
        </LinksContainer>
        <MapContainer>
          <h3>Mapa</h3>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={coordinates}
              zoom={8}
              onLoad={onLoad}
            />
          ) : <></>}
          <p>&copy; {new Date().getFullYear()} Igreja Batista Prudentina | All Rights Reserved</p>
        </MapContainer>
      </ContentContainer>
    </Container>
  );
}
