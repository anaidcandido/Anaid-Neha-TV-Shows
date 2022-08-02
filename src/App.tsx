import episodes from "./episodes.json";

interface IShorterEpisode {
  id: number;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  image: {
    original: string;
  };
  summary: string;
}

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="episodesList">{episodes.map(structureEpisode)}</div>
    </div>
  );
}

function structureEpisode(episodeData: IShorterEpisode) {
  return (
    <div key={episodeData.id}>
      episode name: {episodeData.name}
      {episodeData.summary}
    </div>
  );
}

export default App;
console.log(`Imported ${episodes.length} episode(s)`);
//
//import { greet } from "./utils/greet";
//
//
