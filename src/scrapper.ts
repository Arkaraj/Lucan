import cheerio, { Element } from "cheerio";
import axios from "axios";

export const scrapper = async (query?: string) => {
  const url: string = query
    ? `https://arstechnica.com/${query}/`
    : "https://arstechnica.com/gadgets/";

  const res = await axios.get(url);
  const $ = cheerio.load(res.data);

  let articles: string[] = [];

  $("li.article").each((_i: number, article: Element) => {
    const link = $(article).find("a.overlay").attr("href");

    articles.push(link!);
  });
  return articles;
};
