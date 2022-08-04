//import EpisodesList from "./components/EpisodesList";
import episodes from "./episodes.json";
import AppHeader from "./components/AppHeader";
import StructureEpisode from "./components/StructureEpisode";
import { useState } from "react";
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
  const [searchItem, setSearchItem] = useState("");
  function isMatchingSearch(oneEpisode: IShorterEpisode): boolean {
    if (
      oneEpisode.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      oneEpisode.summary.toLowerCase().includes(searchItem.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  }
  const filteredEpisodes = episodes.filter((ep) => isMatchingSearch(ep));

  return (
    <>
      <AppHeader />
      <input
        type="text"
        placeholder="search episode here!"
        value={searchItem}
        onChange={(event) => setSearchItem(event.target.value)}
      />
      <h3>There are {filteredEpisodes.length} episodes matching the search</h3>
      {filteredEpisodes.map(StructureEpisode)}
      <AppFooter />
    </>
  );
}

export default App;
