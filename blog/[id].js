import Image from "next/image";
import Link from "next/link";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../../lib/posts";
import Head from "next/head";
import styles from "../../styles/blog.module.css";
import { sortByDate } from "../../../utils";
import { BsDot } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import Socialshare from "../../../components/BlogPage/Socialshare/Socialshare";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Blog from "../../../components/BlogPage/Blog/Category/CategorySection";
import FirstSection from "../../../components/BlogPage/Blog/FirstSection/FirstSection";
import OfferPopup from "../../../components/OfferPopup/OfferPopup";
import BottomBar from "../../../components/WebPage/BottomBar/BottomBar";

export default function Post({ postData, posts, allPostsData }) {
  // console.log(postData);
  let makeUrl = postData.author.toLowerCase().replace(/\s+/g, "-");
  let aurl = `/blog/author/${makeUrl}`;

  let catUrl = postData.category.toLowerCase().replace(/\s+/g, "-");
  let curl = `/blog/category/${catUrl}`;

  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <>
      <section className={styles.MainS}>
        <Head>
          <link
            rel="icon"
            href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
          />
          <title>{postData.stitle}</title>

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
        </Head>

        <Navbar />

        <FirstSection allPostsData={allPostsData} />
        {/* <div className={styles.DivImg}>
          <Image
            src={postData.img}
            alt={postData.alt}
            className={styles.bImg}
            width="100"
            height="35"
          />
        </div> */}
      </section>

      <main>
        <div className={styles.Open}>
          {/* <Socialshare postData={postData} /> */}
          {/* <div className={styles.headerInfo}>
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
            </div>
          </div> */}
          <div className={styles.bodyInfo}>
            <div className={styles.rightInfo}>
              <div className={styles.blogdiv1}>
                <div className={styles.table}>
                  {/* <h5 className={styles.contentH}> Table of content</h5> */}

                  <div className={styles.contentT}>
                    {postData.table.map((table, i) => {
                      const removeSpecial = table.replace(
                        /[&\/\\#+()$~%.'":*?<>{}]/g,
                        ""
                      );
                      const uMake = removeSpecial
                        .toLowerCase()
                        .replace(/\s+/g, "-");
                      const url = `/blog/#${uMake}`;
                      return (
                        <div key={i}>
                          <div className={styles.divContent}>
                            <p className={styles.tocContent}>
                              <Link href={url}>{table}</Link>
                            </p>

                            <hr className={styles.tableline} />
                          </div>
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
                            const url = `/blog/#${uMake}`;
                            return (
                              <div key={i}>
                                <span>
                                  <p className={styles.tocContent}>
                                    <Link href={url}>{table}</Link>
                                  </p>

                                  <hr className={styles.tableline} />
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.blogdiv1}>
              <div className={styles.leftInfo}>
                <article dangerouslySetInnerHTML={{ __html: postData.body }} />
                <hr />

                <div>
                  <h1 className={styles.rpH1}>Related Posts</h1>
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

            <Blog />
          </div>
        </div>
      </main>
      <Footer />
      <OfferPopup />
      <BottomBar radio={true} />
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
      posts: posts.sort(sortByDate),
    },
  };
}
