import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()



const AppProvider = ({ children }) => {
const [topMusic,setTopMusic ]= useState([]);
 const [selectMusic,setSelectMusic ]= useState('POP');
 const[isPlaying, setIsPlaying]= useState();
 const [text, setText] = useState();
 const [artist, setArtist]= useState([]);
   const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('updatedFavorites'))||[]);

console.log(favorites)




const fetchData =(url)=>{
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '91410e5a11msh65b992a9150ca2ep1c78ebjsn2feeb0f104b0',
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	}
};

fetch(url , options)
	.then(response => response.json())
	.then(response => setTopMusic(response))
	.catch(err => console.error(err));
}
    useEffect(()=>{
     fetchData(`https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=${selectMusic}`)
},[selectMusic])
 

 useEffect(() => {
    if (!text) return
     fetchData(`https://shazam-core.p.rapidapi.com/v1/search/multi?search_type=SONGS_ARTISTS&query=${text}`)
  },[text])
 

function handleMusicChange(e) {
    setSelectMusic(e.target.value);
  }

  //086354b5a7msh69302f79fb8d214p10a813jsn0e1db01537de


 
   const fetchSong =(url)=>{
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '91410e5a11msh65b992a9150ca2ep1c78ebjsn2feeb0f104b0',
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	}
};

fetch(url , options)
	.then(response => response.json())
	.then(response => setArtist(response))
	.catch(err => console.error(err));
}
     useEffect(()=>{
     fetchSong('https://shazam-core.p.rapidapi.com/v1/charts/world')
},[])
 


  const addToFavorites = (key) => {
    const meal = topMusic.find((me) => me.key === key);
     const alreadyFavorite = favorites.find((meal) => meal.key === key);
      if (alreadyFavorite) return
    const updatedFavorites = [...favorites, meal]
    setFavorites(updatedFavorites)
    localStorage.setItem("updatedFavorites", JSON.stringify(favorites))
  }

  return (
    <AppContext.Provider
      value={{topMusic, handleMusicChange , setTopMusic, setIsPlaying, isPlaying, setText, text, selectMusic, artist,addToFavorites,favorites,setFavorites }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }