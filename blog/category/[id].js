import React from "react";
import fs from "fs";
import { NextSeo } from "next-seo"; // Add this import statement
import path from "path";
import matter from "gray-matter";
import { getSortedPostsData } from "../../../../lib/posts";
import Head from "next/head";
import { sortByDate } from "../../../../utils";
import { useState } from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import CategorySection from "../../../../components/BlogPage/CategoryPage/CategorySection";
import CourseSection from "../../../../components/BlogPage/CourseSection/CourseSection";
import OfferPopup from "../../../../components/OfferPopup/OfferPopup";
import BottomBar from "../../../../components/WebPage/BottomBar/BottomBar";

export default function CategoryBlog({ categoryPosts, categoryPostTag }) {
  const [visible, setVisible] = useState(9);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 9);
  };

  const cattitle = categoryPosts[0]?.cattitle || "";
  const catdesc = categoryPosts[0]?.catdesc || "";

  return (
    <>
      <NextSeo
        title={`${cattitle}`}
        description={`${catdesc}`}
        // Add other SEO properties as needed
      />

      <Head>
        {categoryPosts.slice(0, 1).map(({ category, categoryPosts }) => {
          let makeUrl = category.toLowerCase().replace(/\s+/g, "-");

          return (
            <>
              <link
                rel="canonical"
                href={"https://blog.learnbay.co/category/" + makeUrl}
              />
            </>
          );
        })}
        {/* <html lang="en" /> */}
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>

      <Navbar />
      <CategorySection
        categoryPosts={categoryPosts}
        categoryPostTag={categoryPostTag}
      />
      <CourseSection />

      <Footer />
      <OfferPopup />
      <BottomBar radio={true} />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const categories = files.map((fileName) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", fileName),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    const categoryLower = frontMatter.category.toLowerCase();
    let categoryUrl = categoryLower.replace(/\s+/g, "-");

    return categoryUrl;
  });

  const paths = categories.map((category) => ({
    params: { id: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const allPostsData = getSortedPostsData();

  //Filter post by categories
  const categoryPosts = allPostsData.filter(
    (post) => post.category.toLowerCase().replace(/\s+/g, "-") === id
  );
  let singleCategoryPost = allPostsData.map((post) => {
    return post.category;
  });
  let categoryPostTag = Array.from(new Set(singleCategoryPost));
  return {
    props: {
      categoryPosts: categoryPosts.sort(sortByDate),
      categoryPostTag,
    },
  };
}
