import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import { NextSeo } from "next-seo"; // Add this import statement
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

  const [visible, setVisible] = useState(9);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 9);
  };
  const [state, setstate] = useState();


  const authortitle = categoryPosts[0]?.authortitle || "";

  const adesc = categoryPosts[0]?.adesc || "";

  // useEffect(() => {
  //   categoryPosts.map((value,i) =>{
  //     setstate(value.author)
  //     // console.log(value.author)
  //   })

  // }, );
  // console.log("@@@@@@",cattitle)
  return (
    <>

      <NextSeo
        title={`${authortitle}`}
        description={`${adesc}`}
      // Add other SEO properties as needed
      />


      <Head>

        {categoryPosts.slice(0, 1).map(
          ({ author, categoryPosts }) => {
            let makeUrl = author.toLowerCase().replace(/\s+/g, "-");

            return (

              <link rel="canonical" href={'https://blog.learnbay.co/author/' + makeUrl} />

            );
          }
        )}
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <meta name="robots" content="index, follow" />
      </Head>
   

      <br></br><br></br><br></br><br></br><br></br>

      <div className={authorstyle.mdiv}>
        <div className={authorstyle.mcircle}>
          <Image
            src={categoryPosts[0].authorimg}
            alt=""
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
            <Link href={categoryPosts[0].authorlinkedin}>
              <FaLinkedinIn className={authorstyle.bIcons} />
            </Link>
          </div>


          {/* <div>
            <h3>Designation : {categoryPosts[0].position}</h3>
          </div> */}

          <div className={authorstyle.adesc}>
            <p> &quot;{categoryPosts[0].authordesc}&quot;</p>

          </div>



        </div>
      </div>

      <section className={styles.blogWrap}>
        {categoryPosts.slice(0, visible).map(
          ({ id, date, title, author, readTime, headerImg, categoryPosts }) => {
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

      <div className={styles.loadMore}>

        <button onClick={showMoreItems}>Load More...</button>
      </div>
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
