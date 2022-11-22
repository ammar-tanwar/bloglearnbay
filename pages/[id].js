import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllPostIds, getPostData, getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import styles from "../styles/blog.module.css";
import { BsDot } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import Socialshare from "../components/Socialshare/Socialshare";
import LikeButtonComponent from '../components/LikeButtonComponent/LikeButtonComponent';

export default function Post({ postData, posts }) {
  // console.log(postData);
  return (
    <>
      <section className={styles.MainS}>
        <Head>
          <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
          <title>{postData.title}</title>
          <meta
            name="description"
            content={postData.desc}
          />
          <link href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/Learnbay-Favicon-L.png" />
{/* Schema genertor start */}
          <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${postData.id}"
        },
        "title": "${postData.title}",
        "image": "${postData.img}", 
        "author": {
          "@type": "Person",
          "author": "${postData.author}"
        },
        
        "publisher": {
          "@type": "Organization",
          "name": "Learnbay",
          "logo": {
            "@type": "ImageObject",
            "url": "https://blog.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain-blog%2FLearnbay-Logo.webp&w=256&q=100"
          }
        },
        "datePublished": "${postData.date}"
      }
      
    `}</script>
    {/* Schema Generator End */}
        </Head>
        <div className={styles.DivImg}>
          <img
            src={postData.img}
            alt="Learnbay"
            width="100%"
            height="450px"
          ></img>
        </div>
      </section>
      <main> 

        <div className={styles.Open}>
        <Socialshare postData={postData}/>
          <div className={styles.headerInfo}>
            <h1>{postData.mainH1}</h1>
            <span>
              By <strong>{postData.author}</strong> <BsDot className="bIcon" />
              Published in <strong>{postData.tag}</strong>{" "}
              <BsDot className="bIcon" />
              <strong className={styles.time}>{postData.time}</strong>
            </span>
          </div>
          <div className={styles.bodyInfo}>
            <div className={styles.rightInfo}>
              <div className={styles.blogdiv1}>
                <div className={styles.table}>
                  <h5>Table of content</h5>
                  <div className={styles.contentT}>
                    {postData.table.map((table, i) => {
                      const removeSpecial = table.replace(
                        /[&\/\\#+()$~%.'":*?<>{}]/g,
                        ""
                      );
                      const uMake = removeSpecial
                        .toLowerCase()
                        .replace(/\s+/g, "-");
                      const url = `#${uMake}`;
                      return (
                        <div key={i}>
                          {/* <div className={styles.numberBack}>
                            <span className={styles.number}>{i}</span>
                          </div> */}
                          <span>
                            <p>
                              <Link href={url}>{table}</Link>
                            </p>
                            <hr className={styles.tableline} />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <h5>Related Posts</h5>
                  <div className={styles.relatePost}>
                    {posts.map((post, i) => {
                      return (
                        <div className={styles.rPost} key={i}>
                          <a href={post.id}>
                            {" "}
                            <h5>{post.title}</h5>
                          </a>
                          <span>
                            {post.author}
                            <p className={styles.rPostD}>
                              <IoTimeOutline className={styles.timeIcon} />
                              {post.date}
                            </p>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blogdiv1}>
              <div className={styles.leftInfo}>
                <article dangerouslySetInnerHTML={{ __html: postData.body }} />
                <hr />
                <div className={styles.tag}>
                  <div className={styles.lSide}>
                    <p>Tags</p>{" "}
                    {postData.tag.map((tag, i) => {
                      return <span key={i}>#{tag}</span>  
                      ;
                    })}

                    

                  </div>
                </div>
                <div>
                   <Socialshare postData={postData}/>
                </div>

                <div>
                <LikeButtonComponent />
                </div>


                  
                <hr />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const posts = getSortedPostsData();
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
      posts,
    },
  };
}