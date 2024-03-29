import fs from "fs";
import { Feed } from "feed";
import { getBlogPostsData } from "./posts";
import { sortByDate } from "../utils";

const generateRssFeed = async () => {
  const posts = await getBlogPostsData();
  const postSort = posts.sort(sortByDate);
  const siteURL = process.env.VERCEL_URL;
  const date = new Date();
  const author = {
    name: "Learnbay",
    email: "contacts@learnbay.co",
    link: " https://twitter.com/Learnbay",
  };
  const feed = new Feed({
    title: "Learnbay blog",
    description: "",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/logo.svg`,
    favicon: `${siteURL}/favicon.webp`,
    copyright: `All rights reserved ${date.getFullYear()}, Sreetam Das`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });
  postSort.forEach((post) => {
    const url = `${siteURL}/${post.id}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.desc,
      content: post.body,
      author: post.author,
      contributor: post.author,
      date: new Date(post.date),
    });
  });
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
};

export default generateRssFeed;
