import cheerio from "cheerio";
import axios from "axios";

const url = "https://arstechnica.com/";

(async function () {
  const res = await axios.get(url);
  const $ = cheerio.load(res.data);
  console.log($);
})();
