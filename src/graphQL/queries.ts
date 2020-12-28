export const getAnimeById = `
query ($id: Int) {
  Media(id: $id, type:ANIME) {
  	title {
  	  english
      native
      romaji
  	}
    isAdult
    status
    seasonYear
    season
    genres
    meanScore
  }
}
`;
