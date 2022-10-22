import styles from './OverlayMapKyoto.module.scss'
import cn from 'classnames'
import React, { useState } from 'react'
import { GoogleMap, LoadScriptNext, GroundOverlay } from '@react-google-maps/api'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import SwitchBar from '../../bases/SwitchBar'
import router from 'next/router'

export type Props = {
  className?: string
}
const key = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
const containerStyle = {
  width: '90vw',
  height: '70vh',
}
const center = {
  lat: 35.017424,
  lng: 135.741849,
}
const HeianMap =
  'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/kyoto.png?alt=media&token=b688df04-fee8-4cae-a631-8f1ed478a329'
const KamakuraMap =
  'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/20120208090958ac2.jpeg?alt=media&token=c501a95e-fc64-4957-afee-bb560946d0d2'
const SengokuMap =
  'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/EjgoDuQVcAA73u4.jpeg?alt=media&token=1e78a4e6-5fe1-4b18-a359-36129e790169'
const BakumatsuMap = `https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/01.jpeg?alt=media&token=3dcaf6d1-0058-4cd0-aad7-42d99463c6da`

const OverlayMapKyoto: React.FC<Props> = ({ className }) => {
  const [inputValue, setInputValue] = React.useState(0.5)
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const [isHeianSelected, setIsHeianSelected] = useState(false)
  const [isKamakuraSelected, setIsKamakuraSelected] = useState(false)
  const [isSengokuSelected, setIsSengokuSelected] = useState(false)
  const [isBakumatsuSelected, setIsBakumatsuSelected] = useState(true)

  const HeianKyo = () => {
    if (typeof window !== 'undefined') {
      const ne = new window.google.maps.LatLng(35.029812, 135.771863)
      const sw = new window.google.maps.LatLng(34.97637, 135.71348769383832)
      const bounds = new window.google.maps.LatLngBounds(sw, ne)
      return <GroundOverlay key={'url'} url={HeianMap} bounds={bounds} opacity={inputValue} />
    }
  }
  const KamakuraCapital = () => {
    if (typeof window !== 'undefined') {
      const ne = new window.google.maps.LatLng(35.045947117938745, 135.81440515491875)
      const sw = new window.google.maps.LatLng(34.932881534339224, 135.71126141863022)
      const bounds = new window.google.maps.LatLngBounds(sw, ne)
      return <GroundOverlay key={'url'} url={KamakuraMap} bounds={bounds} opacity={inputValue} />
    }
  }
  const SengokuCapital = () => {
    if (typeof window !== 'undefined') {
      const ne = new window.google.maps.LatLng(35.04301067712829, 135.77421551633472)
      const sw = new window.google.maps.LatLng(34.990561167379454, 135.73505873293402)
      const bounds = new window.google.maps.LatLngBounds(sw, ne)
      return <GroundOverlay key={'url'} url={SengokuMap} bounds={bounds} opacity={inputValue} />
    }
  }
  const BakumatsuCapital = () => {
    if (typeof window !== 'undefined') {
      const ne = new window.google.maps.LatLng(35.05650258346137, 135.79073827270742)
      const sw = new window.google.maps.LatLng(34.96941497354437, 135.72357997849176)
      const bounds = new window.google.maps.LatLngBounds(sw, ne)
      return <GroundOverlay key={'url'} url={BakumatsuMap} bounds={bounds} opacity={inputValue} />
    }
  }

  return (
    <div className={cn(styles.default, className)}>
      <LoadScriptNext googleMapsApiKey={key}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={{
            gestureHandling: 'greedy',
            streetViewControl: false,
            fullscreenControl: false,
            styles: MapStyles,
          }}
        >
          {isHeianSelected && <HeianKyo />}
          {isKamakuraSelected && <KamakuraCapital />}
          {isSengokuSelected && <SengokuCapital />}
          {isBakumatsuSelected && <BakumatsuCapital />}
        </GoogleMap>
      </LoadScriptNext>
      <Box sx={{ width: '80vw' }}>
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
      <SwitchBar
        onHeianClick={() => setIsHeianSelected((prev) => !prev)}
        onKamakuraClick={() => setIsKamakuraSelected((prev) => !prev)}
        onSengokuClick={() => setIsSengokuSelected((prev) => !prev)}
        onBakumatsuClick={() => setIsBakumatsuSelected((prev) => !prev)}
      />
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

export default OverlayMapKyoto
function getZoom(): any {
  throw new Error('Function not implemented.')
}
