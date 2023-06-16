import React from 'react';
import Image from "next/image";

const SearchForm = ({placeholder, value, handleChange, handleReset, handleSubmit}) => {
  return (
    <form className="relative flex-center w-full" onSubmit={handleSubmit}>
      <input type="text" placeholder={placeholder} value={value} onChange={handleChange} required className="search-input peer" />
      {value && (
        <button type="reset" onClick={handleReset} className="btn-reset">
          <Image src={"/icons/cross.svg"} width={12} height={12} alt="Clear icon" />
        </button>
      )}
    </form>
  )
}

export default SearchForm;