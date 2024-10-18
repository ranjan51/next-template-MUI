// LocationSearch.tsx
import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng, Suggestion } from 'react-places-autocomplete'
import TextField from '@mui/material/TextField'

interface LocationSearchProps {
  handleSelect: (location: any) => void // Adjust the type as needed
}

const LocationSearch: React.FC<LocationSearchProps> = ({ handleSelect }) => {
  const handleChange = (address: string) => {
    handleSelect(null) // Reset selected location when the user changes the input
  }

  const handleSelectPlace = async (address: string) => {
    try {
      const results = await geocodeByAddress(address)
      const latLng = await getLatLng(results[0])
      handleSelect({ address, ...latLng })
    } catch (error) {
      console.error('Error selecting place', error)
    }
  }

  return (
    <PlacesAutocomplete value={''} onChange={handleChange} onSelect={handleSelectPlace}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <TextField
            fullWidth
            label='Search Location'
            {...getInputProps({
              placeholder: 'Search Places...'
            })}
            style={{ marginBottom: '10px' }} // Add style directly instead of using spread
          />
          <div>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion: Suggestion) => (
              <div
                key={suggestion.placeId}
                style={{
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                  padding: '10px' // Add any additional styles if needed
                }}
                onClick={() => {
                  // Handle your click logic here
                }}
              >
                {suggestion.description}
              </div>
            ))}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  )
}

export default LocationSearch
