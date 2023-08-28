import React from 'react'
import { useState, useEffect } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { callAPI } from '../utils/CallApi'
import { useNavigate, createSearchParams } from 'react-router-dom'

function SearchBar() {
  const [suggestions, setSuggestions] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("All")
  const navigate = useNavigate()

  const onHandleSubmit = (event) => { 
    event.preventDefault()

    navigate({
      pathname: "search",
      search: `${
        createSearchParams({
          category: `${category}`,
          searchTerm: `${searchTerm}`
        })
      }`
    })

    // setting the searchTerm and category to default value after we search for required product/category
    setSearchTerm("")
    setCategory("All")
  }

  const getSuggestions = () => { 
    callAPI(`data/suggestions.json`)
    .then((suggestionResult) => {
      setSuggestions(suggestionResult)
    })
  }

  useEffect(() => {
    getSuggestions()
  }, [])

  return (
    <div className='w-[100%]'>
        <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
            <select onChange={(event) => setCategory(event.target.value)} 
              className="p-2 bg-gray-300 text-black border text-xs xl:text-sm">
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Computers</option>
                <option>Home</option>
                <option>Mobiles</option>
            </select>

            <input className='flex grow items-center h-[100%] rounded-l text-black' type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            <button className='w-[45px]'>
                <MagnifyingGlassIcon 
                  onClick={onHandleSubmit} 
                  className='h-[27px] m-auto stroke-slate-900'
                />
            </button>
        </div>

        { suggestions &&
          <div className='bg-white text-black w-full z-40 absolute'>
            {
              suggestions.filter((suggestion) => {
                const currentSearchTerm = searchTerm.toLowerCase()
                const title = suggestion.title.toLowerCase()

                return(
                  currentSearchTerm &&
                  title.startsWith(currentSearchTerm) &&
                  title !== currentSearchTerm 
                  // the above line makes the suggetion box go away when the complete title of the book/product is entered in the search box
                )
              })
              .slice(0, 10) 
              .map((suggestion) => (
                <div key={suggestion.id} onClick={() => setSearchTerm(suggestion.title)}>
                  {suggestion.title}
                </div>
              ))

              // slice(0, 10) --> filtering only top 10 suggestions from the list of suggestions returned to be displayed
              // map funtion with rendering div, gives each suggestion its own div
            }
          </div>
        }

    </div>
  )
}

export default SearchBar