// import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllPostIds, getPostData, getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import styles from "../styles/blog.module.css";
import { sortByDate } from "../utils";
import { BsDot } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import Socialshare from "../components/Socialshare/Socialshare";
import LikeButtonComponent from "../components/LikeButtonComponent/LikeButtonComponent";
import React, { useState } from "react";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Post({ postData, posts, updatesd }) {
  let makeUrl = postData.author.toLowerCase().replace(/\s+/g, "-");
  let aurl = `/author/${makeUrl}`;

  let catUrl = postData.category.toLowerCase().replace(/\s+/g, "-");
  let curl = `/category/${catUrl}`;

  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  // Define the IDs for the blogs where you want to include the script
  const scriptIncludedIds = ["data-analyst-career-paths"];

  const shouldIncludeScript = scriptIncludedIds.includes(postData.id);

  return <>
    <section className={styles.MainS}>
      <Head>
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <title>{postData.stitle}</title>
        {/* <html lang="en" /> */}

        <meta name="description" content={postData.desc} />

        <meta name="keywords" content={postData.tag} />
        <link
          rel="canonical"
          href={"https://blog.learnbay.co/" + postData.id}
        />
        <meta name="author" content={postData.author} />

        <meta name="publisher" content="Learnbay" />

        <meta
          property="article:published_time"
          content={postData.published_time}
        />

        <meta
          property="article:modified_time"
          content={postData.modified_time}
        />

        <meta name="robots" content="index, follow" />

        <link href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/Learnbay-Favicon-L.png" />
        {/* Schema genertor start */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
                "@context": "https://schema.org",
                "@type": "Article",
                "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://blog.learnbay.co/${postData.id}"
                },
                "headline": "${postData.title}",
                "description": "${postData.desc}",
                "image": "${postData.img}",   
                "author": {
                "@type": "Person",
                "name": "${postData.author}",
                "url": "https://blog.learnbay.co/"
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
            } `,
          }}
        />

        {shouldIncludeScript && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
             "@context": "https://schema.org",
             "@type": "VideoObject",
             "name": "${postData.vname}",
             "description": "${postData.vdesc}",
             "thumbnailUrl": "${postData.vthumbnailUrl}",
             "uploadDate": "${postData.vuploadDate}",
             "duration": "${postData.vduration}",
             "contentUrl": "${postData.vcontentUrl}",
             "embedUrl": "${postData.video}",
     
             "publisher": {
               "@type": "Organization",
               "name": "Learnbay",
               "logo": {
                 "@type": "ImageObject",
                 "url": "https://blog.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain-blog%2FLearnbay-Logo.webp&w=256&q=100"
               }
             }
           }`,
            }}
          />
        )}
      </Head>

      <div className={styles.DivImg}>
        {/* <img
          src={postData.img}
          alt={postData.alt}
          width="100%"
          height="450px"
          className={styles.bImg}
        ></img> */}

        <Image
          src={postData.img}
          alt={postData.alt}
          className={styles.bImg}
          layout="responsive"
          width={100}
          height={35}
        />
      </div>
    </section>

    <main>
      <div className={styles.Open}>
        <Socialshare postData={postData} />
        <div className={styles.headerInfo}>
          <h1>{postData.mainH1}</h1>
          <div className={styles.Bloginfo}>
            By{" "}
            <strong className={styles.aname}>
              <a href={aurl} target="_blank" rel="noreferrer">
                {postData.author}
              </a>
            </strong>{" "}
            <BsDot className="bIcon" />
            Category{" "}
            <strong className={styles.aname}>
              <a href={curl} target="_blank" rel="noreferrer">
                {postData.category}
              </a>
            </strong>{" "}
            <BsDot className="bIcon" /> Reading time{" "}
            <strong className={styles.time}>{postData.time}</strong>{" "}
            <BsDot className="bIcon" /> {postData.publish}{" "}
            <strong className={styles.date}>{postData.date}</strong>
            {postData.updatedate && (
              <>
                <BsDot className="bIcon" /> Updated On{" "}
                <strong className={styles.date}>{postData.updatedate}</strong>
              </>
            )}
          </div>
        </div>
        <div className={styles.bodyInfo}>
          <div className={styles.rightInfo}>
            <div className={styles.blogdiv1}>
              <div className={styles.table}>
                <h5 className={styles.contentH}> Table of content</h5>

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
                          <p className={styles.tocContent}>
                            <Link href={url} legacyBehavior>{table}</Link>
                          </p>

                          <hr className={styles.tableline} />
                        </span>

                        <div></div>
                      </div>
                    );
                  })}
                </div>

                <div className={styles.parentDdiv}>
                  <button
                    onClick={toggleContent}
                    className={styles.tabButton}
                  >
                    {isContentVisible ? "Hide Content" : "Table of content"}{" "}
                    <span className={styles.TdownIcon}>
                      <FaChevronDown />
                    </span>
                  </button>
                  <div className={styles.MobileContent}>
                    {isContentVisible && (
                      <div className={styles.contentTM}>
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
                              <span>
                                <p className={styles.tocContent}>
                                  <Link href={url} legacyBehavior>{table}</Link>
                                </p>

                                <hr className={styles.tableline} />
                              </span>

                              <div></div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* <button onClick={toggleContent}>
      {isContentVisible ? 'Hide Content' : 'Table of content'}
    </button>
    {isContentVisible &&  <div className={styles.contentT}>
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
                        
                        <span>
                          <p className={styles.tocContent}>
                            <Link href={url}>{table}</Link>
                          </p>

                          <hr className={styles.tableline} />
                        </span>

                        <div>

                        </div>
                      </div>
                    );
                  })}
                </div>} */}
              </div>
            </div>
          </div>

          <div className={styles.blogdiv1}>
            <div className={styles.leftInfo}>
              <article dangerouslySetInnerHTML={{ __html: postData.body }} />
              <hr />

              {/* tags & keywords section */}
              {/* <div className={styles.tag}>
                <div className={styles.lSide}>
                  <p>Tags</p>{" "}
                  {postData.tag.map((tag, i) => {
                    return <span key={i}>#{tag}</span>
                      ;
                  })}



                </div>
              </div> */}
              <div>
                <h2 className={styles.rpH1}>Related Posts</h2>
                <div className={styles.relatePost}>
                  {posts.slice(1, 6).map((post, i) => {
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

              <div>
                <Socialshare postData={postData} />
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </main>
  </>;
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
      posts: posts.sort(sortByDate),
    },
  };
}
