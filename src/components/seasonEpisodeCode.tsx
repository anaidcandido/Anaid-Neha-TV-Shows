interface episodeSeasonData {
  season: number;
  number: number;
}

export default function seasonEpisodeCode(props: episodeSeasonData) {
  let seasonCode = "";
  let episodeCode = "";
  if (props.season >= 10) {
    seasonCode = "S" + props.season;
  } else {
    seasonCode = "S" + "0" + props.season;
  }

  if (props.number >= 10) {
    episodeCode = "E" + props.number;
  } else {
    episodeCode = "E" + "0" + props.number;
  }

  /* This is what we had before:
    if (props.number >= 10) {
      episodeCode = "E" + props.season;
    } else {
      episodeCode = "E" + "0" + props.season;
    }
    */

  return seasonCode + episodeCode;
}
