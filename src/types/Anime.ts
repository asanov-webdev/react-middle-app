interface AnimeTitle {
  english?: string;
  native?: string;
  romaji?: string;
}

export type Anime = {
  title: AnimeTitle;
  genres?: string[];
  isAdult?: boolean;
  meanScore?: number;
  season?: string;
  seasonYear?: number;
  status?: string;
};
