import React from 'react'
import { useGlobalContext } from '../context';
import {genres} from '../assests/constants';
import './style.css';
import {Link} from 'react-router-dom';
import { FaPlayCircle } from 'react-icons/fa';
import { BsBookmarkHeart } from 'react-icons/bs';


const HomePage = () => {
   
   const {topMusic, handleMusicChange, setIsPlaying, isPlaying, text, selectMusic, addToFavorites} = useGlobalContext();
  
   const songs = topMusic?.tracks?.hits;

console.log(songs)
if(text){
  return(   
    <div >
    <h2 className='select ' style={{fontSize:'20px'}}>Result for {text}</h2>
<div className=' music'>
     
        {songs?.map((music) => 
       ( <div className='music-card'>
          <div className="song ">
        <div className={`playpause ${isPlaying?.title === music.track.title ? 'show'  : 'hidden'}`}>
          <FaPlayCircle size={35} />
          </div>
           <img className="img" src={music.track.images.coverart} onClick={()=>setIsPlaying(music.track)} />
           </div >

           <div className="title-card ">
        <p className="title ">
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/songs/${music?.track.key}`}>
            {music.track.title}
          </Link>
        </p>
        <div className='heart'>
        <p className="subtitle">
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={music.track.artists ? `/artists/${music?.track.artists[0]?.adamid}` : '/top-artists'}>
            {music.track.subtitle}
          </Link>
        </p>
        <div className='heart-2'>
          <BsBookmarkHeart onClick={() => addToFavorites(music.track.key)}/>
        </div>
      </div>
      
      </div>
          
    </div>
           ))}
        </div>
    </div>

   )
}
    
  return (

    <div className='container '>
      <div className='select '>
        <h2 style={{fontSize:'20px'}}>Discover</h2>
        <select onChange={handleMusicChange}
            className='select-2'>

          {genres.map(genre=> 
          <option value={genre.value} key={genre.value}
          >{genre.title}</option>)}
        </select>
        </div>
<div className=' music'>
        {topMusic.map((music)=> 
        (<div className='music-card'>
          <div className="song ">
        <div className={`playpause ${isPlaying?.title === music.title ? 'show'  : 'hidden'}`}>
          <FaPlayCircle size={35} />
          </div>
           <img className="img" src={music.images.coverart} onClick={()=>setIsPlaying(music)} />
           </div >

           <div className="title-card ">
        <p className="title ">
          <Link style={{ color:  '#646cff', textDecoration: 'inherit'}} to={`/songs/${music?.key}`}>
            {music.title}
          </Link>
        </p>
        <div className='heart'>
        <p className="subtitle">
          <Link style={{ color:' #35386e', textDecoration: 'inherit'}} to={music.artists ? `/artists/${music?.artists[0]?.adamid}` : '/top-artists'}>
            {music.subtitle}
          </Link>
        </p>
        <div className='heart-2'>
          <BsBookmarkHeart onClick={() => addToFavorites(music.key)}/>
          
        </div>
      </div>
      
      </div>
          
    </div>))}
        </div>

    </div>
  )
}

export default HomePage