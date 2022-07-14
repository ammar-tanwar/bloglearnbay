import React, { useState, useEffect } from "react";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import TabData from "./TabData";
import styles from "./Tabs.module.css";

const Tabs = () => {
  const [viewAll, setViewAll] = useState(true);
  const [oneYear, setOneYear] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });

  return (
    <div className="wrapper">
      <div className={styles.MenuTabs}>
        <div className={styles.leftPanel}>
          <>
            {mobile ? (
              <span
                key={TabData[0].id}
                id="0"
                onClick={() => setViewAll(!viewAll)}
              >
                {TabData[0].title}
                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[0].id}
                id="0"
                onMouseOver={() => {
                  setViewAll(true);
                  setOneYear(false);
                  setNonTech(false);
                  setGuarantee(false);
                  setStack(false);
                }}
              >
                {TabData[0].title}
                <IoIosArrowForward />
              </span>
            )}

            {viewAll ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                <a href="https://learnbay.co/advance-data-science-certification-courses"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Advance-Data-Science.webp"
                        width="180"
                        height="55"
                        alt="Learnbay" 
                      />
                    </div>
                  </div></a>
                  <a href="https://learnbay.co/data-science-ai-for-managers"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Data-Science-and-AI-for.webp"
                        width="180"
                        height="55"
                        alt="Learnbay" 
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="https://learnbay.co/full-stack-software-development-program"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/full-stack-developer.webp"
                        width="180"
                        height="55"
                        alt="Learnbay" 
                      />
                    </div>
                  </div></a>
                  <a href="https://learnbay.co/artificial-intelligence-certification-course"><div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <Image
                          src="/Artificial-Intelligence.webp"
                          width="180"
                          height="55"
                          alt="Learnbay" 
                        />
                      </div>
                    </div></a>
                </div>
                <div className={styles.Row}>
                <a href="https://learnbay.co/full-stack-web-development-program"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/full-stack-development.webp"
                        width="180"
                        height="55"
                        alt="Learnbay" 
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                <a href="https://learnbay.co/job-guarantee-or-money-back-data-science-ai-certification-course"><div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <Image
                          src="/JOB.webp"
                          width="180"
                          height="55"
                          alt="Learnbay" 
                        />
                      </div>
                  </div></a>
                </div>
              </div>
            ) : (
              ""
            )}
            {mobile ? (
              <span
                key={TabData[1].id}
                id="1"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(true);
                  setNonTech(false);
                  setGuarantee(false);
                  setStack(false);
                }}
                onClick={() => setOneYear(!oneYear)}
              >
                {TabData[1].title}
                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[1].id}
                id="1"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(true);
                  setNonTech(false);
                  setGuarantee(false);
                  setStack(false);
                }}
              >
                {TabData[1].title}
                <IoIosArrowForward />
              </span>
            )}
            {oneYear ? (
              <div className={styles.RowWrap}>
              <div className={styles.Row}>
                <a href="https://learnbay.co/data-science-certification-courses"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/DATA-SCIENCE-AND-AI.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                      />
                  </div>
                </div></a>
                <a href="https://learnbay.co/data-science-ai-for-managers"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/Data-Science-and-AI-for.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
              <a href="https://learnbay.co/advance-data-science-certification-courses"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Advance-Data-Science.webp"
                        width="180"
                        height="55"
                        alt="Learnbay" 
                      />
                    </div>
                  </div></a>
                <a href="https://learnbay.co/artificial-intelligence-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/Artificial-Intelligence.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
              <a href="https://learnbay.co/job-guarantee-or-money-back-data-science-ai-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/JOB.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
              <a href="https://learnbay.co/business-analytics-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/BA.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
            </div>
            ) : (
              ""
            )}
            {mobile ? (
              <span
                key={TabData[2].id}
                id="2"
                onClick={() => setNonTech(!nonTech)}
              >
                {TabData[2].title}
                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[2].id}
                id="2"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(true);
                  setGuarantee(false);
                  setStack(false);
                }}
              >
                {TabData[2].title}
                <IoIosArrowForward />
              </span>
            )}

            {nonTech ? (
              <div className={styles.RowWrap}>
              <div className={styles.Row}>
                <a href="https://learnbay.co/full-stack-web-development-program"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/full-stack-development.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
                <a href="https://learnbay.co/full-stack-software-development-program"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/full-stack-developer.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
            </div>
            ) : (
              ""
            )}
            {mobile ? (
              <span
                key={TabData[3].id}
                id="3"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setGuarantee(true);
                  setStack(false);
                }}
                onClick={() => setGuarantee(!Guarantee)}
              >
                {TabData[3].title}
                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[3].id}
                id="3"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setGuarantee(true);
                  setStack(false);
                }}
              >
                {TabData[3].title}
                <IoIosArrowForward />
              </span>
            )}
            {Guarantee ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="https://learnbay.co/job-guarantee-or-money-back-data-science-ai-certification-course"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/JOB.webp"
                        width="180"
                        height="55"
                        alt="Learnbay" 
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                <a href="https://learnbay.co/full-stack-web-development-program"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/full-stack-development.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              </div>
            ) : (
              ""
            )}
            {mobile ? (
              <span
                key={TabData[4].id}
                id="4"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setGuarantee(false);
                  setStack(true);
                }}
                onClick={() => setStack(!Stack)}
              >
                {TabData[4].title}
                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[4].id}
                id="4"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setGuarantee(false);
                  setStack(true);
                }}
              >
                {TabData[4].title}
                <IoIosArrowForward />
              </span>
            )}
            {Stack ? (
              <div className={styles.RowWrap}>
              <div className={styles.Row}>
                <a href="https://learnbay.co/data-science-certification-courses"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/DATA-SCIENCE-AND-AI.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                      />
                  </div>
                </div></a>
                <a href="https://learnbay.co/full-stack-software-development-program"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/full-stack-developer.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
              <a href="https://learnbay.co/advance-data-science-certification-courses"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/Advance-Data-Science.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
                <a href="https://learnbay.co/full-stack-web-development-program"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/full-stack-development.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
              <a href="https://learnbay.co/artificial-intelligence-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/Artificial-Intelligence.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
                <a href="https://learnbay.co/data-science-ai-for-managers"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/Data-Science-and-AI-for.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
                <a href="https://learnbay.co/job-guarantee-or-money-back-data-science-ai-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/JOB.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
                <a href="https://learnbay.co/business-analytics-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/BA.webp"
                      width="180"
                      height="55"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
                <a href="https://learnbay.co/data-analytics-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/DA.webp"
                      width="180"
                      height="55"
                      layout="intrinsic"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
            </div>
            ) : (
              ""
            )}
          </>
        </div>
        {mobile ? (
          ""
        ) : (
          <div className={styles.middlePanel}>
            {viewAll ? (
              <div className={styles.RowWrap}>
              <div className={styles.Row}>
              <a href="https://learnbay.co/advance-data-science-certification-courses"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/Advance-Data-Science.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
                <a href="https://learnbay.co/data-science-ai-for-managers"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/Data-Science-and-AI-for.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
                <a href="https://learnbay.co/full-stack-software-development-program"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/full-stack-developer.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
                <a href="https://learnbay.co/artificial-intelligence-certification-course"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Artificial-Intelligence.webp"
                        width="300"
                        height="80"
                        alt="Learnbay" 
                      />
                    </div>
                  </div></a>
              </div>
              <div className={styles.Row}>
              <a href="https://learnbay.co/full-stack-web-development-program"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/full-stack-development.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
              <a href="https://learnbay.co/job-guarantee-or-money-back-data-science-ai-certification-course"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/JOB.webp"
                        width="300"
                        height="80"
                        alt="Learnbay" 
                      />
                    </div>
                </div></a>
              </div>
            </div>
            ) : (
              ""
            )}
            {oneYear ? (
              <div className={styles.RowWrap}>
              <div className={styles.Row}>
                <a href="https://learnbay.co/data-science-certification-courses"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/DATA-SCIENCE-AND-AI.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
                
                
              </div>
              <div className={styles.Row}>
                <a href="https://learnbay.co/advance-data-science-certification-courses"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/Advance-Data-Science.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
                
                
              </div>
              <div className={styles.Row}>
              <a href="https://learnbay.co/artificial-intelligence-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/Artificial-Intelligence.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
                <a href="https://learnbay.co/data-science-ai-for-managers"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/Data-Science-and-AI-for.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
                <a href="https://learnbay.co/job-guarantee-or-money-back-data-science-ai-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/JOB.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
                <a href="https://learnbay.co/business-analytics-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/BA.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
            </div>
            ) : (
              ""
            )}
            {nonTech ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="https://learnbay.co/full-stack-web-development-program"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/full-stack-development.webp"
                        width="300"
                        height="80"
                        alt="Learnbay" 
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="https://learnbay.co/full-stack-software-development-program"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/full-stack-developer.webp"
                        width="300"
                        height="80"
                        alt="Learnbay" 
                      />
                    </div>
                  </div></a>
                </div>
              </div>
            ) : (
              ""
            )}
            {Guarantee ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="https://learnbay.co/job-guarantee-or-money-back-data-science-ai-certification-course"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/JOB.webp"
                        width="300"
                        height="80"
                        alt="Learnbay" 
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="https://learnbay.co/full-stack-web-development-program"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/full-stack-development.webp"
                        width="300"
                        height="80"
                        alt="Learnbay" 
                      />
                    </div>
                  </div></a>
                </div>
              </div>
            ) : (
              ""
            )}
            {Stack ? (
              <div className={styles.RowWrap}>
              <div className={styles.Row}>
                <a href="https://learnbay.co/data-science-certification-courses"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/DATA-SCIENCE-AND-AI.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
                
                <a href="https://learnbay.co/full-stack-web-development-program"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/full-stack-development.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
                <a href="https://learnbay.co/advance-data-science-certification-courses"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/Advance-Data-Science.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
                
                <a href="https://learnbay.co/full-stack-software-development-program"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/full-stack-developer.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
              <a href="https://learnbay.co/artificial-intelligence-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/Artificial-Intelligence.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
                <a href="https://learnbay.co/data-science-ai-for-managers"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/Data-Science-and-AI-for.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
                <a href="https://learnbay.co/job-guarantee-or-money-back-data-science-ai-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/JOB.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
                <a href="https://learnbay.co/business-analytics-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/BA.webp"
                      width="300"
                      height="80"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
              <div className={styles.Row}>
                <a href="https://learnbay.co/data-analytics-certification-course"><div className={styles.Program}>
                  <div className={styles.ProLeft}>
                    <Image
                      src="/DA.webp"
                      width="300"
                      height="80"
                      layout="intrinsic"
                      alt="Learnbay" 
                    />
                  </div>
                </div></a>
              </div>
            </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
