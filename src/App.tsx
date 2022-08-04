//import EpisodesList from "./components/EpisodesList";
import episodes from './episodes.json'
import AppHeader from "./components/AppHeader";
import StructureEpisode from "./components/StructureEpisode";
import { useState } from 'react'
import AppFooter from "./components/AppFooter";

interface IShorterEpisode {
  id: number;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  image: {
    original: string;
    medium: string;
  };
  summary: string;
}


function App(): JSX.Element {
  const episodesList = episodes.map(StructureEpisode)
  const [searchItem, setSearchItem] = useState('')
  return (
    <>
      <AppHeader />
      {episodesList}
      <input
        type="text"
        placeholder="search episode here!"
        onChange={(event) => setSearchItem(event.target.value)}
      />
      {episodesList.filter(findEpisodes(episodes, searchItem))}
      <AppFooter />
    </>
  );
}

function findEpisodes(oneEpisode: IShorterEpisode, searchItem: string): boolean{
  if(oneEpisode.name.toLowerCase().includes(searchItem.toLowerCase())){
    return true 
  } else {
    return false 
  }
}

export default App;
