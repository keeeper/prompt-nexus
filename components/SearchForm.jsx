import React from 'react'

const SearchForm = ({placeholder, value, handleChange}) => {
  return (
    <form className="relative flex-center w-full">
      <input type="text" placeholder={placeholder} value={value} onChange={handleChange} required className="search-input peer"/>
    </form>
  )
}

export default SearchForm