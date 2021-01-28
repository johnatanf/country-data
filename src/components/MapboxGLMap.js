import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import styled from 'styled-components'

const StyledMap = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 250px;
`
const MapboxGLMap = props => {
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
    const initialiseMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [props.country.latlng[1], props.country.latlng[0]],
        zoom: 2
      })

      map.on('load', () => {
        setMap(map)
        map.resize()
      })
    }
    if (!map) initialiseMap({ setMap, mapContainer })
  }, [map, props.country.latlng])
  
  return <StyledMap ref={el => (mapContainer.current = el)}></StyledMap>
}

export default MapboxGLMap