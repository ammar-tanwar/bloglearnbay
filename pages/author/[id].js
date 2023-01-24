import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getSortedPostsData } from "../../lib/posts";
import styles from "../../styles/blogM.module.css";
import Head from "next/head";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { sortByDate } from "../../utils";
import authorstyle from "../../styles/author.module.css";
import Link from 'next/link';
import {

  FaLinkedinIn,

} from "react-icons/fa";


export default function CategoryBlog({ categoryPosts }) {
  const [state, setstate] = useState();

  // useEffect(() => {
  //   categoryPosts.map((value,i) =>{
  //     setstate(value.author)
  //     // console.log(value.author)
  //   })

  // }, );
  // console.log("@@@@@@",state)
  return (
    <>
      <Head>
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />

        <title>{categoryPosts.tag}</title>
      </Head>
      {/* <section className={styles.blogHead}>
        {categoryPosts.slice(0, 1).map((category) => {
          return <p key={category.tag}>{category.tag}</p>;
        })}
      </section> */}

      <br></br><br></br><br></br><br></br><br></br>

      {/* <section>
        <h1>{categoryPosts[0].author}</h1>
        <h1>{categoryPosts[0].position}</h1>
        <p>{categoryPosts[0].desc}</p>


      </section> */}

      <div className={authorstyle.mdiv}>
        <div className={authorstyle.mcircle}>
              <Image
                src={categoryPosts[0].headerImg}
                priority={true}
                width={170}
                height={170}
                className={authorstyle.circle}
                
              />

        </div>
       

        <div className={authorstyle.m1div}>

        <div className={authorstyle.m2div}>
            <h1>{categoryPosts[0].author}</h1>
        </div>
        <div className={authorstyle.social}>
             <Link href="https://www.linkedin.com/company/learnbay/">
                    <FaLinkedinIn className={authorstyle.bIcons} />
              </Link>
        </div>
            

        {/* <div>
            <h3>Designation : {categoryPosts[0].position}</h3>
          </div> */}

          <div className={authorstyle.adesc}>
            <p> "  Here in this blog, learn about Darwin's various use cases and implications for any business perspective. This AI-based Darwin platform allows to ease of various type of AI-related difficulties and help to get more output from various AI device. "
            " Here in this blog, learn about Darwin's various use cases and implications for any business perspective. This AI-based Darwin platform allows to ease of various type of AI-related difficulties and help to get more output from various AI device. "" {categoryPosts[0].desc} "</p>

          </div>
         
          
        
        </div>
      </div>

      <section className={styles.blogWrap}>
        {categoryPosts.map(
          ({ id, date, title, author, readTime, headerImg }) => {
            const url = `/${id}`;
            return (
              <div
                className={styles.blog}
                key={id}
                style={{
                  background: `linear-gradient(0deg, rgba(0,0,0,0.8) 34%, rgba(255,255,255,0) 200%), url(${headerImg}) no-repeat center center `,
                  backgroundSize: "cover",
                }}
              >
                <a href={url}>
                  <h4>{title}</h4>
                </a>
                <div className={styles.profileWrap}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/avatar-02.webp"
                    width="80"
                    height="45"
                    layout="intrinsic"
                    alt="blog_writer"
                    className={styles.blogIMg}
                  />
                  <span>
                    <h5>{author}</h5>
                    <p>
                      {date} <BsDot className={styles.dot} />
                      <IoTimeOutline className={styles.time} />
                      {readTime}
                    </p>
                  </span>
                </div>
              </div>
            );
          }
        )}
      </section>
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
    const categoryLower = frontMatter.author.toLowerCase();
    let categoryUrl = categoryLower.replace(/\s+/g, "-");

    return categoryUrl;
  });

  const paths = categories.map((author) => ({
    params: { id: author },
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
    (post) => post.author.toLowerCase().replace(/\s+/g, "-") === id
  );

  return {
    props: {
      categoryPosts: categoryPosts.sort(sortByDate),
    },
  };
}