import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[-23.5293, -47.4711]}
    zoom={10}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {places?.map(({ id, name, location }) => {
      const { latitude, longitude } = location

      return (
        <Marker
          position={[latitude, longitude]}
          title={name}
          key={`place-${id}`}
        />
      )
    })}
  </MapContainer>
)

export default Map
