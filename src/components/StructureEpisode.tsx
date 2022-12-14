import seasonEpisodeCode from "../utils/seasonEpisodeCode";

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
        <div>
          <h2>
            Name: {episodeData.name} | Season/Episode:
            {seasonEpisodeCode(episodeData)}
          </h2>
        </div>
        <div>
          <img alt="episode preview" src={episodeData.image.medium} />
        </div>
        <p> Summary: {episodeData.summary.replaceAll('<p>','').replaceAll('</p>','')}</p>
      </div>
    </>
  );
}
