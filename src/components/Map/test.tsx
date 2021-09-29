import { render, screen } from '@testing-library/react'
import Map from './Map'

describe('<Map />', () => {
  it('Should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('Should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Sorocaba',
      slug: 'sorocaba',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Bauru',
      slug: 'bauru',
      location: {
        latitude: 11,
        longitude: -1
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/sorocaba/i)).toBeInTheDocument()
    expect(screen.getByTitle(/bauru/i)).toBeInTheDocument()
  })
})
