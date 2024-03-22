import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import { useRouter } from "next/router";
import Tabs from "../Tabs/Tabs";

const Navbar = () => {
  const router = useRouter();
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  const handleIcon = (data) => {
    setIcon(data);
  };

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [setMobile]);

  return (
    <div>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below details to get started</p>
          <Form
            popup={true}
            setTrigger={setPopups}
            radio={true}
            thankyou={true}
          />
        </div>
      </Popup>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <GiHamburgerMenu
            className={styles.ham}
            onClick={() => {
              showMenu();
              setIcon(false);
            }}
          />

          <div className={show ? styles.mobileWrapper : styles.hide}>
            <div className={styles.mobileMenu}>
              <span onClick={showMenu}>
                <Link href="https://www.learnbay.co/#servicePro">
                  Career Services
                </Link>
              </span>
              {/* <span onClick={showMenu}>
                <Link href="https://www.learnbay.co/about-us">About Us</Link>
              </span> */}
              <span onClick={showMenu}>
                <Link href="https://www.learnbay.co/success-story">
                  Success Story
                </Link>
              </span>
              <span onClick={showMenu}>
                <Link href="https://www.learnbay.co/#ProjectLab">
                  ProjectLab
                </Link>
              </span>
              <span onClick={showMenu}>
                <Link href="https://blog.learnbay.co/">Blog</Link>
              </span>
            </div>
          </div>
          <a href="https://www.learnbay.co/">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width={mobile ? "180" : "230"}
              height="60"
            />
          </a>
          {mobile ? (
            <button
              onClick={() => {
                setIcon(!icon);
                setShow(false);
              }}
              className="hoverBtn"
            >
              Courses
              {icon ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          ) : (
            <button
              onMouseEnter={() => setIcon(true)}
              onMouseOver={() => setIcon(true)}
              onClick={() => {
                setIcon(!icon);
                setShow(false);
              }}
              className="hoverBtn"
            >
              Courses
              {icon ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          )}

          {icon ? (
            <div
              className={styles.megaMenu}
              onMouseOver={() => setIcon(true)}
              onMouseLeave={() => setIcon(false)}
            >
              <Tabs handleIcon={handleIcon} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.right}>
          <span>
            <Link href="https://www.learnbay.co/#servicePro">Career Services</Link>
          </span>
          {/* <span>
            <Link href="https://www.learnbay.co/about-us">About Us</Link>
          </span> */}
          <span>
            <Link href="https://www.learnbay.co/success-story">Success Story</Link>
          </span>
          <span>
            <Link href="https://www.learnbay.co/#ProjectLab"> ProjectLab</Link>
          </span>

          <span>
            <Link href="https://blog.learnbay.co/">Blog</Link>
          </span>

          <button onClick={popupShow} className="hoverBtn">
            Apply Now
            <FaArrowRight className={styles.icon} />
          </button>

          <Popup></Popup>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
