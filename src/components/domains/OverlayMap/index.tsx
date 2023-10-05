"use client";

import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScriptNext,
  GroundOverlay,
  Marker,
} from "@react-google-maps/api";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export type Props = {
  className?: string;
};
const key = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
  ? process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
  : "";

const containerStyle = {
  width: "90vw",
  height: "58vh",
};
const center = {
  lat: 40.513103,
  lng: 141.4897,
};
const wideMap =
  "https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/mapdata.svg?alt=media&token=19651b33-029c-4d12-9c81-bc4334aabc1d";
const zoomedMap =
  "https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/mapdatanarrow.svg?alt=media&token=6c137ba9-0ce3-4656-98f1-ee0d02ec248f";

const OverlayMapTest: React.FC<Props> = ({ className }) => {
  const [inputValue, setInputValue] = React.useState(0.5);
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const [currentZoom, setCurrentZoom] = React.useState(16);
  const OverlayData = () => {
    if (typeof window !== "undefined") {
      const nsew = {
        north: 40.52,
        south: 40.4942,
        east: 141.513105,
        west: 141.4666,
      };
      return (
        <GroundOverlay
          key={"url"}
          url={wideMap}
          bounds={nsew}
          opacity={inputValue}
        />
      );
    }
  };

  const [currentLocation, setCurrentLocation] = useState<
    google.maps.LatLng | google.maps.LatLngLiteral | null
  >(null);
  useEffect(() => {
    // 現在地を取得する処理
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting current location:", error);
      }
    );
  }, []);
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <LoadScriptNext googleMapsApiKey={key}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={currentZoom}
          options={{
            gestureHandling: "greedy",
            streetViewControl: false,
            fullscreenControl: false,
            styles: MapStyles,
          }}
        >
          {currentLocation && <Marker position={currentLocation} />}

          <OverlayData />
        </GoogleMap>
      </LoadScriptNext>

      <p>古地図不透明度</p>
      <Box sx={{ width: "80vw" }}>
        <Slider
          aria-label="opacity"
          defaultValue={0.5}
          step={0.1}
          marks
          min={0.0}
          max={1.0}
          onChange={(e) => handleChange(e)}
        />
      </Box>
    </div>
  );
};

export default OverlayMapTest;

const MapStyles = [
  {
    featureType: "all",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        saturation: "4",
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "poi.attraction",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.medical",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.place_of_worship",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.school",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        hue: "#ff0000",
      },
    ],
  },
  {
    featureType: "poi.school",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.school",
    elementType: "labels",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        saturation: "-100",
      },
    ],
  },
  {
    featureType: "poi.school",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "poi.sports_complex",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
];
