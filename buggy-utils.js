// D1: Get all drama series
export const getDramas = (series) =>
  series.filter((show) => show.genre === "Drama");

// D2: Find an episode by ID
export const getEpisodeById = (season, idText) =>
  season.episodes.find((episode) => String(episode.id) === String(idText));

export const addEpisodeToFirstSeason = (show, episode) => {
  const firstSeason = show.seasons[0];
  firstSeason.episodes.push(episode);
  return { ...show };
};
