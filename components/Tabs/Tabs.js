import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TabData } from "./TabData";
import styles from "./Tabs.module.css";

const Tabs = ({ handleIcon }) => {

  const [dataLoop, setDataLoop] = useState([
    { title: "Popular Courses", value: true },
    { title: "Certification Program", value: false },
    { title: "Master's Degree Program", value: false },
  ]);

  const menuChange = (title, index) => {

    if (title === dataLoop[index].title) {
      setDataLoop([...dataLoop], (dataLoop[index].value = true));
      for (let i = 0; i < dataLoop.length; i++) {
        if (index === i) {
          setDataLoop([...dataLoop], (dataLoop[index].value = true));
        } else {
          setDataLoop([...dataLoop], (dataLoop[i].value = false));
        }
      }
    }
  };

  return (
    <div className="wrapper">
      <div className={styles.MenuTabs}>
        <div className={styles.leftPanel}>
          {TabData.map((data, index) => {
            return (
              <div key={data.id}>
                <span
                  key={data.id}
                  id="0"
                  onMouseOver={() => {
                    menuChange(data.title, index);
                  }}
                  className={
                    dataLoop[index].value ? styles.spanActive : styles.span
                  }
                >
                  {data.title}
                  <IoIosArrowForward />
                </span>
                {/*  For Mobile Tabs are visible onClick below middlePanel is for mobile view */}
                {dataLoop[index].value ? (
                  <div className={styles.middlePanel}>
                    {TabData.map((data, index) => {
                      const { courseName } = data;
                      return dataLoop[index].value ? (
                        <div className={styles.RowWrap} key={index}>
                          {courseName.map((data, index) => {
                            return (
                              <div className={styles.Row} key={index}>
                                <a href={data.url}>
                                  <div
                                    className={styles.Program}
                                    onClick={() => handleIcon(false)}
                                  >
                                    <div className={styles.ProLeft}>
                                      <h5>{data.CName}</h5>
                                      <span>{data.hours} </span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        ""
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.middlePanel}>
          {TabData.map((data, index) => {
            const { courseName } = data;
            return dataLoop[index].value ? (
              <div className={styles.RowWrap} key={index}>
                {courseName.map((data, index) => {
                  return (
                    <div className={styles.Row} key={index}>
                      <a href={data.url}>
                        <div
                          className={styles.Program}
                          onClick={() => handleIcon(false)}
                        >
                          <div className={styles.ProLeft}>
                            <h5>{data.CName}</h5>
                            <span>{data.hours} </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;