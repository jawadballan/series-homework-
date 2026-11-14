export function getEpisodeTitle(show, seasonIndex, episodeIndex) {
  return show?.seasons?.[seasonIndex]?.episodes?.[episodeIndex]?.title; // Return the title of the episode at the given season and episode index, or undefined if any of the properties are missing
}

export function getLastSeasonNumber(show) {
  return show?.seasons?.length ? show.seasons.length : 0; // Return 0 if there are no seasons nad return the length of the seasons array if there are seasons so last season number is the length of the seasons array
}

export function getNextSeasonYear(show) {
  return show?.nextSeason?.year ?? "No announcement"; // Return the year of the next season if it exists, or "No announcement" if it doesn't
}
