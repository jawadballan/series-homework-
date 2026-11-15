//a1
export function getEpisodeTitle(show, seasonIndex, episodeIndex) {
  return show?.seasons?.[seasonIndex]?.episodes?.[episodeIndex]?.title; // Return the title of the episode at the given season and episode index, or undefined if any of the properties are missing
}
//a2
export function getLastSeasonNumber(show) {
  return show?.seasons?.length ? show.seasons.length : 0; // Return 0 if there are no seasons nad return the length of the seasons array if there are seasons so last season number is the length of the seasons array
}
//a3
export function getNextSeasonYear(show) {
  return show?.nextSeason?.year ?? "No announcement"; // Return the year of the next season if it exists, or "No announcement" if it doesn't
}

//b1
export function getById(series, id) {
  return series.find( (show) => show.id === id); // Return the show with the given id, or undefined if it doesn't exist
}
//b2
export function getSeasonsCount(series) {
  return series.map(show => ({ title: show.title, seasons: show.seasons.length }))
}
//b3
export function hasTopEpisode(show, minRating) {
  return show.seasons.some((season) =>
    season.episodes.some((episode) => episode.rating >= minRating)
  );
}

//b4
export function getCreatorsFrom(series, country) {
  return series
    .filter((show) => show.creator.country === country)
    .map((show) => show.creator.name);
}

//b5
export function sortByStartYear(series) {
  return [...series].sort((a, b) => a.startYear - b.startYear);
}
