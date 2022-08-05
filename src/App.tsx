import simpson from "./simpson.json";
//import episodes from "./episodes.json";
import AppHeader from "./components/AppHeader";
import StructureEpisode from "./components/StructureEpisode";
import { useState } from "react";
import AppFooter from "./components/AppFooter";

export interface IShorterEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number | any;
  };
  image: {
        original: string;
        medium: string;
      }
    | any;
  summary: string | any;
  _links: {
    self: {
      href: string;
    };
  };
}

function App(): JSX.Element {
  const [searchItem, setSearchItem] = useState("");
  function isMatchingSearch(oneEpisode: IShorterEpisode): boolean {
    if (oneEpisode.summary !== null) {
      if (
        oneEpisode.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        oneEpisode.summary.toLowerCase().includes(searchItem.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  const filteredEpisodes = simpson.filter((ep) => isMatchingSearch(ep));

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
