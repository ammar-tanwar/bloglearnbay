import Link from "next/link";
import { sortByDate, slugify } from "../../../utils";

// import { getSortedPostsData } from "../lib/posts";
import styles from "../../styles/blogM.module.css";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import Head from "next/head";
import { IoTimeOutline } from "react-icons/io5";

export default function Post({ post }) {
  const date = new Date(post.frontmatter?.date);
  return (
    <>
      <section>
        <div
          className={styles.blog}
          style={{
            background: `linear-gradient(0deg, rgba(0,0,0,0.8) 34%, rgba(255,255,255,0) 200%), url(${post.frontmatter.image}) no-repeat center center `,
            backgroundSize: "cover",
          }}
        >
          <a href={`/blog/${post.slug}`}>
            <h4>{post.frontmatter.title}</h4>
          </a>
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
              <h5>{post.frontmatter.author}</h5>
              <p>
                {post.frontmatter.date} <BsDot className={styles.dot} />
                <IoTimeOutline className={styles.time} />
                {post.frontmatter.readTime}
              </p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

// export async function getStaticProps(_context) {

//   const post = getSortedPostsData();

//   return {
//     props: {
//       post: post.sort(sortByDate),
//     },
//   };
// }
