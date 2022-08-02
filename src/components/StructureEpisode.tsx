import { connected } from "process";
import episode from "../episodes.json";
import seasonEpisodeCode from "./seasonEpisodeCode";

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

export default function StructureEpisode(
  episodeData: IShorterEpisode
): JSX.Element {
  return (
    <>
      <div key={episodeData.id}>
        <h2>
          Name: {episodeData.name} | Season/Episode:
          {seasonEpisodeCode(episodeData)}
        </h2>
        <div>
          <img alt="episode preview" src={episodeData.image.medium} />
        </div>
        <p> Summary: {episodeData.summary}</p>
      </div>
    </>
  );
}
