import React from "react";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/blogM.module.css";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar"
import Link from 'next/link';
import { BsDot } from "react-icons/bs";
import { sortByDate } from "../utils";
import { IoTimeOutline } from "react-icons/io5";
import generateRssFeed from "../lib/generateRss";
import generateCategoryRssFeed from "../lib/geneRateCategoryRss";
// import Search from "../components/Searchbar/Search"
import Search from '../components/search'
import utilStyles from '../styles/utils.module.css'


export default function blog({ allPostsData }) {
  const length = parseInt(allPostsData.length);
  let singleCategoryPost = allPostsData.map((post) => {
    return post.category;
  });
  let categoryPostTag = Array.from(new Set(singleCategoryPost));

  // let makeUrl =  allPostsData.author.toLowerCase().replace(/\s+/g, "-");
  // let aurl = `/author/${makeUrl}`
  
            
  return (
    <>
      <Head>
        <title>All Blogs</title>
        <meta name="description" content="Learnbay Blogs" />
        <link href="/Learnbay-Favicon-L.png" />
        <meta name="google-site-verification" content="q2xA2OZrvhAj8r1YGNF_3x5m5GuWCqo9rNb7atG4mXU" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://blog.learnbay.co/blogs"/>
        <meta name="author" content="Learnbay"/>
        <meta name="publisher" content="Learnbay"/>
        <meta name="keywords" content="Learnbay Blogs"/>
        <meta name="robots" content="follow, index" />


      </Head><br/><br/><br/><br/><br/><br/>
      <section className={styles.blogHead}>

        <div><p>All Blogs</p>  
        {/* <Search />  */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <h2 className={utilStyles.headingLg}>Search</h2> */}
        {/* <Search /> */}
        <Sidebar/>
      </section>
        </div>

        
      </section>
      <section className={styles.blogWrap}>
        {allPostsData
          .slice(0, 1000)
          .map(({ id, date, title, author, readTime, headerImg }) => {
            const url = `/${id}`;
            let makeUrl =  author.toLowerCase().replace(/\s+/g, "-");
            let aurl = `/author/${makeUrl}`;
            return (

              <Link href={url} key={id}>
              <div
                className={styles.blog}
                key={id}
                style={{
                  background: `linear-gradient(0deg, rgba(0,0,0,0.8) 34%, rgba(255,255,255,0) 200%), url(${headerImg}) no-repeat center center `,
                  backgroundSize: "cover",
                }}
              >
               

                  <h4>{title}</h4>
           
           <Link href={aurl}>
                <div className={styles.profileWrap}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/avatar-02.webp"
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
                </Link>
              </div>
              </Link>
            );
          })}
      </section>
    </>
  );
}

export async function getStaticProps(_context) {
  await generateRssFeed();
  await generateCategoryRssFeed();
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData: allPostsData.sort(sortByDate),
    },
  };
}
