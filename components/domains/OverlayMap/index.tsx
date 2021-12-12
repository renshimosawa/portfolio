import styles from './OverlayMap.module.scss'
import cn from 'classnames'
import React from 'react'
import { GoogleMap, LoadScriptNext, GroundOverlay } from '@react-google-maps/api'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

export type Props = {
  className?: string
}

const key = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
const containerStyle = {
  width: '900px',
  height: '600px',
}

const center = {
  lat: 40.510153,
  lng: 141.491653,
}

const OverlayMap: React.FC<Props> = ({ className }) => {
  const [inputValue, setInputValue] = React.useState(0.5)
  const handleChange = (e: any) => {
    setInputValue(e.target.value)
  }
  return (
    <div className={cn(styles.default, className)}>
      <LoadScriptNext googleMapsApiKey={key}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          options={{
            gestureHandling: 'greedy',
            streetViewControl: false,
            fullscreenControl: false,
            styles: MapStyles,
          }}
        >
          <GroundOverlay
            key={'url'}
            url="https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/mapdata.svg?alt=media&token=19651b33-029c-4d12-9c81-bc4334aabc1d"
            bounds={bounds}
            opacity={inputValue}
          />
        </GoogleMap>
      </LoadScriptNext>
      <p>古地図不透明度</p>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="opacity"
          defaultValue={0.5}
          valueLabelDisplay="auto"
          step={0.1}
          marks
          min={0.0}
          max={1.0}
          onChange={(e) => handleChange(e)}
        />
      </Box>
    </div>
  )
}

const MapStyles = [
  {
    featureType: 'all',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        saturation: '4',
      },
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'poi.attraction',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.medical',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.place_of_worship',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi.school',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        hue: '#ff0000',
      },
    ],
  },
  {
    featureType: 'poi.school',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.school',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        saturation: '-100',
      },
    ],
  },
  {
    featureType: 'poi.school',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'poi.sports_complex',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
]

const sw = new window.google.maps.LatLng(40.494315, 141.466797)
const ne = new window.google.maps.LatLng(40.519499, 141.513105)
const bounds = new window.google.maps.LatLngBounds(sw, ne)
export default OverlayMap
