import grayMatter from 'gray-matter';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    } else {
      return 1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = grayMatter(fileContents, { excerpt: '<!-- excerpt -->' });

  const html = marked(matterResult.content);
  const updatedate = matterResult.data.updatedate || null;

  // Combine the data with the id
  return {
    id,
    title: matterResult.data.title,
    mainH1: matterResult.data.h1,
    desc: matterResult.data.desc,
    img: matterResult.data.headerImg,
    alt: matterResult.data.headerAlt,
    stitle: matterResult.data.stitle,
    publish: matterResult.data.publish,
    published_time: matterResult.data.published_time,
    modified_time: matterResult.data.modified_time,
    author: matterResult.data.author,
    authorimg: matterResult.data.authorimg,
    authordesc: matterResult.data.authordesc,
    authorlinkedin: matterResult.data.authorlinkedin,
    time: matterResult.data.readTime,
    date: matterResult.data.date,
    updatedate: updatedate,
    category: matterResult.data.category,
    cattitle: matterResult.data.title,
    catdesc: matterResult.data.desc,
    authortitle: matterResult.data.authortitle,
    adesc: matterResult.data.adesc,
    tag: matterResult.data.tag,
    position: matterResult.data.position,
    table: matterResult.data.tableData,
    body: html,
    video: matterResult.data.video,
    vname: matterResult.data.vname,
    vdesc: matterResult.data.vdesc,
    vuploadDate: matterResult.data.vuploadDate,
    vcontentUrl: matterResult.data.vcontentUrl,
    vthumbnailUrl: matterResult.data.vthumbnailUrl,
    vduration: matterResult.data.vduration,

  };
}

export const getBlogPostsData = async () => {
  // path where the MDX files are
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
};

export const getCategoryBlogPostsData = async () => {
  // path where the MDX files are
  const files = fs.readdirSync(path.join("posts"));
  const categories = files.map((fileName) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", fileName),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    const categoryLower = frontMatter.category;

    return categoryLower;
  });

  return categories;
};

export const filterBlog = async () => {
  // path where the MDX files are
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData;
};

