import { useState } from "react";
//import episodes from "../episodes.json"

/*interface IShorterEpisode {
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
  return (
    <div>
      <input
        type="text"
        placeholder="search episode here!"
        onChange={(event) => setSearchEpisode(event.target.value)}
      />
      {console.log("search value is", searchEpisode)}
      {console.log("setsearch value is", setSearchEpisode)}
    </div>
  );
}

/* function findOneEpisode(oneEpisode: IShorterEpisode): boolean {
    return (oneEpisode.name.toLowerCase().includes(searchEpisode.toLowerCase()))
    }
const filteredEpisodes = episodes.filter(findOneEpisode)
*/
