
import HomePage from './components/HomePage';

import { useGlobalContext } from './context';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './App.css'
import SideBar from './components/SideBar';
import SearchBar from './components/SearchBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TopArtists from './pages/TopArtists';
import TopCharts from './pages/TopCharts';
import AroundYou from './pages/AroundYou';
import ArtistDetails from './pages/ArtistDetails';
import SongDetails from './pages/SongDetails';
import Search from './pages/Search';





function App() {
  const {isPlaying} =useGlobalContext();
  

  return (
    <BrowserRouter>
    <div style={{display:'flex', position:'relative'}}>
     <SideBar />


  	<div className="con ">
      <SearchBar/>
    
<div className="routes ">
    <div className="route ">
      <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou/>} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search" element={<Search />} />
      </Routes>
      </div>
      </div>
</div>
     
    

     { isPlaying?.key &&( 
     <div className='music-box'>
      <div className='music-box-2'>
        <img src={isPlaying?.images.coverart} alt="" className='img-2'/>
         <div className="title-2" to={`/songs/${isPlaying?.key}`}>
            {isPlaying?.title}
          </div>
      </div>
     <AudioPlayer
    autoPlay
    src={isPlaying?.hub.actions[1].uri} 
    className='audio' 
  /></div>)
     }
 </div>
  </BrowserRouter>
  );
}

export default App;
