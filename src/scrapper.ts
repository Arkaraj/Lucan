import cheerio, { Element } from "cheerio";
import axios from "axios";

const url = "https://arstechnica.com/gadgets/";

export const scrapper = async () => {
  const res = await axios.get(url);
  const $ = cheerio.load(res.data);

  let articles: string[] = [];

  $("li.article").each((_i: number, article: Element) => {
    const link = $(article).find("a.overlay").attr("href");

    articles.push(link!);
    // console.log(i + 1 + ". " + link);
  });
  return articles;
};
