import { writeFileSync } from "node:fs";
import { loadData } from "./load.js";
import { addSeason } from "./series-service.js";

// 1. Load original data
const data = loadData();

// 2. Create the new season
const season = {
  number: 1,
  episodes: [
    {
      id: 801,
      title: "First Contact",
      rating: 8.0,
      duration: 44,
    },
  ],
};

// 3. Add the season to Desert Signal (ID 5)
const updatedSeries = addSeason(data.series, 5, season);

// 4. Create the updated object
const updatedData = {
  platform: data.platform,
  series: updatedSeries,
};

// 5. Save to JSON file
writeFileSync(
  "series-updated.json",
  JSON.stringify(updatedData, null, 2)
);

console.log("Updated data saved successfully!");