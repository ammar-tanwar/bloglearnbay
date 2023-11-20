import styles from "../Footer/Footer.module.css";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import {
  puneLocation,
  OtherLocation,
  CityFooterData,
  HeadData,
  CourseData,
} from "./FooterData";

const Footer = ({ adPage, adPageCity }) => {
  // console.log("Footer");
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <a href="/">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/white-logo.webp"
              alt="Learnbay"
              width="230"
              height="100"
            />
          </a>
          <p className={styles.FooterInnerli}>
            Enrol now for data science courses, System designing or full stack
            development courses. Master the most demanding skills of job market
            and experience and ever growing and lucrative career transformation.
          </p>
          <div className={styles.FooterSocial}>
            <a href="https://twitter.com/Learnbay" target="_blank">
              <FaTwitter className="bIcons" />
            </a>
            <a href="https://www.facebook.com/learnbay/" target="_blank">
              <FaFacebookF className="bIcons" />
            </a>
            <a
              href="https://www.linkedin.com/company/learnbay/"
              target="_blank"
            >
              <FaLinkedinIn className="bIcons" />
            </a>
            <a href="https://bit.ly/Learnbay_YouTube" target="_blank">
              <FaYoutube className="bIcons" />
            </a>
            <a href="https://instagram.com/learnbayofficial" target="_blank">
              <FaInstagram className="bIcons" />
            </a>
          </div>
          <span style={{ display: "flex", marginTop: "20px" }}>
            <IoMailSharp className="bIcons" />
            <Link href="mailto:contacts@learnbay.co" target="_blank">
              contacts@learnbay.co
            </Link>
          </span>
          {adPage ? (
            <>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <BsFillTelephoneFill className="bIcons" />
                <Link href="tel:+919731135221" target="_blank">
                  (+91) 973 113 5221
                </Link>
              </span>
            </>
          ) : (
            <>
              {" "}
              <span style={{ display: "flex", marginTop: "10px" }}>
                <BsFillTelephoneFill className="bIcons" />
                <Link href="tel:+917795687988" target="_blank">
                  (+91) 77956 87988
                </Link>
              </span>
            </>
          )}
        </div>
        <div className={styles.FooterDivInner}>
          {CourseData.map((Head, index) => {
            return (
              <div key={index}>
                <p className={styles.FooterInnerP}>{Head.Head}</p>
                {Head.Courses.map((Courses) => {
                  return (
                    <a href={Courses.url} key={Courses.name}>
                      <p className={styles.FooterInnerli}>{Courses.name}</p>
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.FooterDivInner}>
          {HeadData.map((Head, index) => {
            return (
              <div key={index}>
                <p className={styles.FooterInnerP}>{Head.Head}</p>
                {Head.LearnbayData.map((LearnbayData) => {
                  return (
                    <a href={LearnbayData.url} key={LearnbayData.name}>
                      <p className={styles.FooterInnerli}>
                        {LearnbayData.name}
                      </p>
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Get Our Apps On</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.app.learnbay"
            target="_blank"
          >
            <button className={styles.btnout}>
              <FaAndroid className="bIcons" style={{ fontSize: "30px" }} />
              Get Our Android App
            </button>
          </a>
          <p className={styles.FooterInnerP}>Find Us Here</p>
          <a href="https://goo.gl/maps/4tC9yN8VTkBf72cW9" target="_blank">
            <p className={styles.FooterInnerli}>
              #1090 , 1st floor, 18th cross road HSR layout sector 3, Bangalore
              - 560102 (Above Sangam Sweets)
            </p>
          </a>
        </div>
      </div>
      {adPageCity ? (
        ""
      ) : (
        <>
          <div
            className={styles.FooterDiv}
            style={{
              borderTop: "1px solid",
              borderBottom: "1px solid",
              borderColor: "#ffffff50",
              alignItems: "end",
            }}
          >
            <div className={styles.FooterDivInner}>
              <p className={styles.FooterInnerP}>
                Project Innovation Lab Address{" "}
              </p>
              {puneLocation.map((data, index) => {
                const { cityName, location } = data;
                return (
                  <div key={index}>
                    <p className={styles.FooterInnerP}>{cityName}</p>
                    <p className={styles.FooterInnerli}>{location}</p>
                  </div>
                );
              })}
            </div>
            {OtherLocation.map((data) => {
              const { id, cityName, location } = data;
              return (
                <div className={styles.FooterDivInner} key={id}>
                  <p className={styles.FooterInnerP}>{cityName} </p>
                  <p className={styles.FooterInnerli}>{location}</p>
                </div>
              );
            })}
          </div>
          {CityFooterData.map((data, index) => {
            return (
              <div
                className={styles.FooterDiv}
                key={index}
                style={{
                  borderBottom: "1px solid",
                  borderColor: "#ffffff50",
                }}
              >
                {data.FirstDiv.map((cityData, index) => {
                  return (
                    <div className={styles.FooterDivInner} key={index}>
                      <div>
                        <p className={styles.FooterInnerP}>{cityData.city}</p>
                        {cityData.cityData.map((city) => {
                          return (
                            <a href={city.url} key={city.name}>
                              <p className={styles.FooterInnerli}>
                                {city.name}
                              </p>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </>
      )}
      <div className={styles.FooterBottom}>
        <div className={styles.FooterBottomInner}>
          <p className={styles.FooterInnerB}>
            Copyright © 2022 Learnbay by Learnvista Pvt. Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
