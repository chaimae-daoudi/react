import React from 'react';
import { useGlobalContext } from '../context';
import './style.css';
import { FaPlayCircle } from 'react-icons/fa';

import {Link} from 'react-router-dom';

const Search = () => {
const {favorites, setIsPlaying, isPlaying} = useGlobalContext();

  if(!favorites) return (
    <h1>Add new song to your favorite</h1>
  )
  return (
  <div className='div' >
    <h2 className='select ' style={{fontSize:'20px'}}>Your favorite music</h2>
<div className=' music'>
     
        {favorites?.map((music) => 
       ( <div className='music-card'>
          <div className="song ">
        <div className={`playpause ${isPlaying?.title === music.title ? 'show'  : 'hidden'}`}>
          <FaPlayCircle size={35} />
          </div>
           <img className="img" src={music.images.coverart} onClick={()=>setIsPlaying(music)} />
           </div >

           <div className="title-card ">
        <p className="title ">
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/songs/${music?.key}`}>
            {music.title}
          </Link>
        </p>
        <div className='heart'>
        <p className="subtitle">
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={music.artists ? `/artists/${music?.artists[0]?.adamid}` : '/top-artists'}>
            {music.subtitle}
          </Link>
        </p>
        <div className='heart-2'>
          
        </div>
      </div>
      
      </div>
          
    </div>
           ))}
        </div>
    </div>  )
}

export default Search