const SiteRepo = "CodheadClub/AwesomeResources"; // Define the repo to get contributors from
const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function () {
  return await Cache(`https://api.github.com/repos/${SiteRepo}/issues`, {
    duration: "1d", // Update every day
    type: "json",
  });
};
