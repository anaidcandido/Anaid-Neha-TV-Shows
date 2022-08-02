import episodes from "../episodes.json";

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

interface episodeSeasonData {
  season: number;
  number: number;
}

function seasonEpisodeCode(props: episodeSeasonData) {
  let seasonCode = "";
  let episodeCode = "";
  if (props.season >= 10) {
    seasonCode = "S" + props.season;
  } else {
    seasonCode = "S" + "0" + props.season;
  }

  if (props.number >= 10) {
    episodeCode = "E" + props.season;
  } else {
    episodeCode = "E" + "0" + props.season;
  }
  return seasonCode + episodeCode;
}

function MakeEpisodeCode(): JSX.Element {
  return <>{episodes.map(seasonEpisodeCode)}</>;
}

export default function StructureEpisode(
  episodeData: IShorterEpisode
): JSX.Element {
  const code = MakeEpisodeCode;
  return (
    <div key={episodeData.id}>
      <h2>
        Name: {episodeData.name} | Season/Episode: {code}
      </h2>
      <div>
        <img alt="episode preview" src={episodeData.image.medium} />
      </div>
      <p> Summary: {episodeData.summary}</p>
    </div>
  );
}
