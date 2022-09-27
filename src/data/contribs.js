const SiteRepo = "CodheadClub/ITSkillsTraining"; // Define the repo to get contributors from
const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function () {
  return await Cache(`https://api.github.com/repos/${SiteRepo}/contributors`, {
    duration: "1w", // 1 week
    type: "json",
  });
};
