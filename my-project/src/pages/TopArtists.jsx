import React, { useState } from 'react'
import { useGlobalContext } from '../context';
import './css.css'
import { FaPlayCircle } from 'react-icons/fa';
const TopArtists = () => {
   const {artist, setIsPlaying, isPlaying} = useGlobalContext()
  
  return (
    <div className='z'>
      <h2>Top 50 charts</h2>
     {artist.map(a =>
     <div className='artist'>
      <h3>{artist.indexOf(a)+1} . </h3>
      <div className='imgs'>
      <img className='chart' src={a.images?.background}/>
      <div className='d'>
        <p className='title'>{a.title}</p>
         <p className='titles'>{a.subtitle}</p>
         </div>
      </div>
      
       <FaPlayCircle className='fa' size={35} onClick={()=>setIsPlaying(a)}/>
       
      </div>
      )}
   </div>
  )
}

export default TopArtists