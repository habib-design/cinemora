import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {

  return (
    <div className="flex items-center gap-3 bg-gray-800 px-4 py-3 rounded-lg w-full max-w-md">
  <img src="search.svg" className="w-5 h-5" alt="search" />

  <input
    type="text"
    placeholder="Search Movies"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
  />
</div>
  )
}

export default Search
