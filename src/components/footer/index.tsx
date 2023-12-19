'use client'

import { useCallback, useMemo, useState } from "react";

import {
  GoogleMap,
  Marker,
  useJsApiLoader,

} from "@react-google-maps/api";

import { Container, ContentContainer, InformationContainer, InformationItem, LinksContainer, MapContainer } from "./styles";

import { InformationData, LinksData } from "./data";

export default function Footer() {
  const MapsLink = "https://www.google.com.br/maps/place/Igreja+Batista+Prudentina/@-22.1167406,-51.3908913,19.72z/data=!4m6!3m5!1s0x9493f4359d66cecf:0x8e56aaa678f31158!8m2!3d-22.1167267!4d-51.3906263!16s%2Fg%2F1ptwl8d6k?entry=ttu"
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
              zoom={15}
              onLoad={onLoad}
            >
              <Marker position={coordinates} onClick={() => {
                window.location.href = MapsLink
              }} />
            </GoogleMap>
          ) : <></>}
          <p>&copy; {new Date().getFullYear()} Igreja Batista Prudentina | All Rights Reserved</p>
        </MapContainer>
      </ContentContainer>
    </Container>
  );
}
