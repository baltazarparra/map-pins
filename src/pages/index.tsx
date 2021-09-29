import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '666',
          name: 'Parque Campolim',
          slug: 'campolim',
          location: {
            latitude: -23.5293,
            longitude: -47.4711
          }
        }
      ]}
    />
  )
}
