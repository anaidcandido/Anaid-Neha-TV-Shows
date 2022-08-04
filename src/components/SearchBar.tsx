import { useState } from "react";
import episodes from "../episodes.json"
import isSearchCharacterInEpisode from '../utils/filteredSearch';
import StructureEpisode from "./StructureEpisode"; 

/* interface IShorterEpisode {
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
*/  

export default function SearchBar(): JSX.Element {
  
  const [searchEpisode, setSearchEpisode] = useState("");

  const filteredEpisodesArray = episodes.filter(isSearchCharacterInEpisode(searchEpisode))

  return (
    <div>
      <input
        type="text"
        placeholder="search episode here!"
        onChange={(event) => setSearchEpisode(event.target.value)}
      />
      <div className='filteredEpisodesArray'>
      {filteredEpisodesArray.map(StructureEpisode)}
      </div>
    </div>
  );
}

