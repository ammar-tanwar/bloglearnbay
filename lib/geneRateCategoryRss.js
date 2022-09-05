import fs from "fs";
import { Feed } from "feed";
import { getBlogPostsData, getCategoryBlogPostsData } from "./posts";
import { sortByDate } from "../utils";

const generateCategoryRssFeed = async () => {
  const posts = await getBlogPostsData();
  const postSort = posts.sort(sortByDate);
  const category = await getCategoryBlogPostsData();
  const removeDuplicateCategory = Array.from(new Set(category));

  [...removeDuplicateCategory].sort(sortByDate).map((post, i) => {
    let category = post;
    const categoryPosts = postSort.filter((post) => post.category === category);

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
      copyright: `All rights reserved ${date.getFullYear()}, Learnbay`,
      updated: date,
      generator: "Feed for Node.js",
      feedLinks: {
        rss2: `${siteURL}/rss/category/feed.xml`,
        json: `${siteURL}/rss/category/feed.json`,
        atom: `${siteURL}/rss/category/atom.xml`,
      },
      author,
    });
    categoryPosts.map((post) => {
      let category = post.category.toLowerCase().replace(/\s+/g, "-");
      const url = `${siteURL}/category/${category}`;
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
      fs.mkdirSync(`./public/rss/category/${category}`, { recursive: true });
      fs.writeFileSync(`./public/rss/category/${category}/feed.xml`, feed.rss2());
      fs.writeFileSync(`./public/rss/category/${category}/atom.xml`, feed.atom1());
      fs.writeFileSync(`./public/rss/category/${category}/feed.json`, feed.json1());
    });
  });
};

export default generateCategoryRssFeed;
