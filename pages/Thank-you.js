import React from "react";
import styles from "../styles/ThankYou.module.css";
import Head from "next/head";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const ThankYou = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Thank you!</title>
        <meta name="description" content="Thank you!" />
      </Head>
      <section className={styles.mains}>
        <div className={styles.left}>
          <h4 className={styles.hptop}>
            <b>Thank you!</b>
            <br />
          </h4>
          <p className={styles.Ptop}>
          We Received your request and look forward to getting in touch soon.
          </p>
          <div>
            <div className={styles.mainb}>
              <div>
                <button className={styles.Button}>
                  <FaArrowRight className="bIcons" />
                  <a href="https://learnbay.co/">Go To Home</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/data-science-ai-program.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Data Science<br />Foundation Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+Foundation+Program+Learnbay.pdf" target="_blank" rel="noreferrer" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" />
                    Download Brochure
                </button>
                </a>
          </div>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/advance-data-science-ai-program.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Advanced Data Science<br />& AI Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf" target="_blank" rel="noreferrer" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" /> 
                    Download Brochure
                </button>
                </a>
          </div>
          <div>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/advance -ai-ml-for-tech-professionals.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Advance AI & ML Program<br />for Tech Professionals
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf" target="_blank" rel="noreferrer" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" />
                    Download Brochure
                </button>
                </a>
          </div>
          </div>
          </div>
        </section>
        <section className={styles.mains}>
        <div className={styles.right}>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/full-stack-web-development.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Full-Stack Web <br />Development Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Web+Development+Program+Learnbay.pdf" target="_blank" rel="noreferrer" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" />
                    Download Brochure
                </button>
                </a>
          </div>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/full-stack-developer-course.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Full-Stack Software <br />Development Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf" target="_blank" rel="noreferrer" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" /> 
                    Download Brochure
                </button>
                </a>
          </div>
          <div>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/dsa&system.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Data Structures Algorithms <br />And System Design
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Structure+Algorithm+%26+System+Design+Learnbay.pdf" target="_blank" rel="noreferrer" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" />
                    Download Brochure
                </button>
                </a>
          </div>
          </div>
          </div>
        </section>
        <section className={styles.mains}>
        <div className={styles.right}>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/data-science-ai-for-managers.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Data Science & AI <br />For Managers
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf" target="_blank" rel="noreferrer" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" />
                    Download Brochure
                </button>
                </a>
          </div>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/data-science-ai-with-job-guarantee.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Data Science & AI <br />with Job Guarantee Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Job+Guarantee+or+100%25+Money+Back+Data+Science+%26+AI+Certification+Program+Learnbay.pdf" target="_blank" rel="noreferrer" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" /> 
                    Download Brochure
                </button>
                </a>
          </div>
          <div>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/dsa-system.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Data Analytics <br />Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Analytics+Certification+Program+Learnbay.pdf" target="_blank" rel="noreferrer" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" />
                    Download Brochure
                </button>
                </a>

          </div>
          </div>
          </div>
        </section>
        <section className={styles.mains} style={{marginBottom:"50px"}}>
        <div className={styles.right}>
          <div>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/business-analytics.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Business Analytics <br />Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf" target="_blank" rel="noreferrer" ><button className={styles.Button}>
                  <FiDownload className="bIcons" />
                  
                    Download Brochure
                </button>
                </a>

          </div>
          </div>
          </div>
        </section>
    </div>
  );
};

export default ThankYou;
