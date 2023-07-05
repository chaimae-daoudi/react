import React, { useState }  from 'react'
import { useGlobalContext } from '../context'
import {FcSearch} from 'react-icons/fc'

const SearchBar = () => {
   const {setText } = useGlobalContext()
    const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

   const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      setText(name)
    }
  }
  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={name} placeholder='search song' className='form-input' />
        <button type="submit" className="btn" >
          <FcSearch/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar