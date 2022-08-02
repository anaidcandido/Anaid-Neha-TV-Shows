import StructureEpisode from "./StructureEpisode";
import seasonEpisodeCode from "./seasonEpisodeCode";
import episode from "../episodes.json";

export default function EpisodesList(): JSX.Element {
  return <div className="episodesList">{episode.map(StructureEpisode)}</div>;
}
