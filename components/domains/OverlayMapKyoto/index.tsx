import styles from './OverlayMapKyoto.module.scss'
import cn from 'classnames'
import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScriptNext, GroundOverlay, Marker } from '@react-google-maps/api'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import SwitchBar from '../../bases/SwitchBar'

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
  'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/kamakura.png?alt=media&token=eecd51a3-5c7b-4dd9-8723-99e9c82a8a56'
const SengokuMap =
  'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/EjgoDuQVcAA73u4.jpeg?alt=media&token=1e78a4e6-5fe1-4b18-a359-36129e790169'
const BakumatsuMap = `https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/01.jpeg?alt=media&token=3dcaf6d1-0058-4cd0-aad7-42d99463c6da`

const OverlayMapKyoto: React.FC<Props> = ({ className }) => {
  const [inputValue, setInputValue] = React.useState(0.5)
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const [buttonState, setButtonState] = useState([true, false, false, false])

  const handleButtonClick = (buttonIndex) => {
    const updatedButtonState = buttonState.map((state, index) => {
      if (index === buttonIndex) {
        return true
      } else if (index < buttonIndex) {
        return false
      } else if (index > buttonIndex) {
        return false
      } else {
        return state
      }
    })
    setButtonState(updatedButtonState)
  }

  const HeianKyo = () => {
    if (typeof window !== 'undefined') {
      const nsew = { north: 35.029812, south: 34.97637, east: 135.771863, west: 135.71348769383832 }
      return <GroundOverlay key={'url'} url={HeianMap} bounds={nsew} opacity={inputValue} />
    }
  }
  const KamakuraCapital = () => {
    if (typeof window !== 'undefined') {
      const nsew = {
        north: 35.045947117938745,
        south: 34.932881534339224,
        east: 135.81440515491875,
        west: 135.71000001,
      }
      return <GroundOverlay key={'url'} url={KamakuraMap} bounds={nsew} opacity={inputValue} />
    }
  }
  const SengokuCapital = () => {
    if (typeof window !== 'undefined') {
      const nsew = {
        north: 35.04301067712829,
        south: 34.990561167379454,
        east: 135.77421551633472,
        west: 135.73505873293402,
      }
      return <GroundOverlay key={'url'} url={SengokuMap} bounds={nsew} opacity={inputValue} />
    }
  }
  const BakumatsuCapital = () => {
    if (typeof window !== 'undefined') {
      const nsew = {
        north: 35.05650258346137,
        south: 34.96941497354437,
        east: 135.79073827270742,
        west: 135.72357997849176,
      }
      return <GroundOverlay key={'url'} url={BakumatsuMap} bounds={nsew} opacity={inputValue} />
    }
  }

  const [currentLocation, setCurrentLocation] = useState(null)
  useEffect(() => {
    // 現在地を取得する処理
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setCurrentLocation({ lat: latitude, lng: longitude })
      },
      (error) => {
        console.error('Error getting current location:', error)
      },
    )
  }, [])

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
          {currentLocation && <Marker position={currentLocation} />}
          {buttonState[0] && <HeianKyo />}
          {buttonState[1] && <KamakuraCapital />}
          {buttonState[2] && <SengokuCapital />}
          {buttonState[3] && <BakumatsuCapital />}
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
        onHeianClick={() => handleButtonClick(0)}
        disabledKyoto={buttonState[0]}
        onKamakuraClick={() => handleButtonClick(1)}
        disabledKamakura={buttonState[1]}
        onSengokuClick={() => handleButtonClick(2)}
        disabledSengoku={buttonState[2]}
        onBakumatsuClick={() => handleButtonClick(3)}
        disabledBakumatsu={buttonState[3]}
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
