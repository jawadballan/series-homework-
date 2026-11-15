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
export function getCreatorsFrom(series, country) {  // Return an array of creator names from the given country, or an empty array if there are no creators from that country
  return series
    .filter((show) => show.creator.country === country)
    .map((show) => show.creator.name);
}

//b5
export function sortByStartYear(series) {
  return [...series].sort((a, b) => a.startYear - b.startYear);
}


//c1
export function renameSeries(series, id, newTitle) { // Return a new array of shows with the title of the show with the given id updated to the new title, or the original array if no show with the given id exists
  return series.map((show) =>
    show.id === id
      ? { ...show, title: newTitle }
      : show
  );
}

//c2
export function addSeason(series, showId, season) {
  return series.map((show) =>  // Map over the series array to create a new array with updated shows
    show.id === showId    // If the show id matches the given showId, return a new show object with the updated seasons array
      ? {
          ...show,
          seasons: [...show.seasons, season],
        }
      : show
  );
}

//c3 
export function addEpisode(series, showId, seasonNumber, episode) {
  return series.map((show) => {
    if (show.id !== showId) { // If the show id does not match, return the show as is
      return show;
    }

    return { // If the show id matches, return a new show object with the updated seasons array
      ...show,
      seasons: show.seasons.map((season) =>
        season.number === seasonNumber
          ? {
              ...season,
              episodes: [...season.episodes, episode],
            }
          : season
      ),
    };
  });
}

//c4
