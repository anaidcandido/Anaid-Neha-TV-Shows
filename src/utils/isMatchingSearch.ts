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

export default function isMatchingSearch(
  oneEpisode: IShorterEpisode,
  searchItem: string
): boolean {
  if (
    oneEpisode.name.toLowerCase().includes(searchItem.toLowerCase()) ||
    oneEpisode.summary.toLowerCase().includes(searchItem.toLowerCase())
  ) {
    return true;
  } else {
    return false;
  }
}
