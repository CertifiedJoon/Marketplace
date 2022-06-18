import React from 'react'
import SelectSearch from 'react-select-search'
function SearchBar() {
  return (
    <div>
      <SelectSearch
        options={countries}
        search
        filterOptions={fuzzySearch}
        emptyMessage="Not found"
        placeholder="Select your country"
      />
    </div>
  )
}

export default SearchBar
