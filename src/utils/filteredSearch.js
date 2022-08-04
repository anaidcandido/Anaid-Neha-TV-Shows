function isSearchCharacterInEpisode(oneEpisode, searchEpisode) {
    return (oneEpisode.name.toLowerCase().includes(searchEpisode))
  }
  
export default function filteredEpisodes(episodeData) {
    return episodeData.filter(isSearchCharacterInEpisode)
  }  