const SiteRepo = "CodheadClub/AwesomeResources"; // Define the repo to get contributors from
const Cache = require("@11ty/eleventy-fetch");

module.exports = async function () {
  return await Cache(`https://api.github.com/repos/${SiteRepo}/contributors`, {
    duration: "1d", // Update every day
    type: "json",
  });
};
