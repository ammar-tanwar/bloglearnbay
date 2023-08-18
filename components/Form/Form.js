import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";

const Form = ({ popup, setTrigger, downloadBrochure, radio, jobDesc }) => {
  const router = useRouter();
 
 //offset to maintain time zone difference
  const [value, setValue] = useState();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    workExperience: "",
    jobDescription: "",
    platform: "",
    Brief: "",
    url: router.asPath,
  });


  useEffect(() => {
    setQuery({ ...query, phone: value});
  }, [value,query]);

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";

  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch(`${endPoint}`, {
      method: "POST",
      body: formData,
    }).then(() =>
      setQuery({
        name: "",
        email: "",
        phone: "",
        workExperience: "",
        jobDescription: "",
        platform: "",
        Brief: "",
        url: router.asPath,
      })
    );
    if (popup) {
      const off = () => {
        setTrigger(false);
      };
      off();
    }

    if (router.pathname === "/") {
      router.push("/Thank-you");
      return;
    }
  };
  // const isWeekday = (date) => {
  //   const day = getDay(date);
  //   return day !== 0;
  // };
  // const filterPassedTime = (time) => {
  //   const currentDate = new Date();
  //   const selectedDate = new Date(time);

  //   return currentDate.getTime() < selectedDate.getTime();
  // };

  return (
    <div className={styles.App}>
      <form onSubmit={formSubmit}>
        <div className={styles.formWrapper}>
          <input
            type="text"
            name="name"
            className={popup ? styles.NameInputs : styles.NameInput}
            required
            placeholder="Enter your Full Name*"
            value={query.name}
            style={{ borderBottom: "1px solid grey" }}
            onChange={handleParam()}
          />
        </div>
        <div className={styles.formWrapper}>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your Email*"
            className={popup ? styles.EmailInputs : styles.EmailInput}
            value={query.email}
            onChange={handleParam()}
          />
        </div>
        <div className={styles.formWrapper}>
          <PhoneInput
            style={
              popup
                ? {
                  height: "50px",
                  borderRadius: "8px",
                  border: "1px solid grey",
                  padding: "10px",
                }
                : {
                  border: "0",
                  height: "50px",
                  borderRadius: "3px",
                  borderBottom: "1px solid grey",
                }
            }
            name="phone"
            rules={{ required: true }}
            defaultCountry="IN"
            placeholder="Enter Phone Number"
            className={popup ? styles.Phones : styles.Phone}
            value={value}
            onChange={setValue}
            required
          />
        </div>

        <>
                {" "}
                {jobDesc ? (
                  <>
                    <div className={styles.formWrapper}>
                      <input
                        type="text"
                        name="jobDescription"
                        placeholder="Job Description"
                        className={
                          popup ? styles.EmailInputs : styles.EmailInput
                        }
                        value={query.jobDescription}
                        onChange={handleParam()}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div className={styles.formWrapper}>
                      <input
                        type="text"
                        name="jobDescription"
                        placeholder="Job Description"
                        className={
                          popup ? styles.EmailInputs : styles.EmailInput
                        }
                        value={query.jobDescription}
                        onChange={handleParam()}
                        required
                      />
                    </div>
                  </>
                )}
              </>
        <div className={popup ? styles.formWrappers : styles.formWrapper}>
          <select
            name="workExperience"
            required
            value={query.workExperience}
            onChange={handleParam()}
          >
            <option value="Work Experience">Work Experience</option>
            <option value="1 to 3 year">1 to 3 years</option>
            <option value="3 to 7 year">3 to 7 years</option>
            <option value="7 to 12 year">7 to 12 years</option>
            <option value="12+ year">12+ years</option>
          </select>
        </div>

         
          {radio ? (
            <div className={popup ? styles.formWrappers : styles.formWrapper}>
              <input
                id="Data Science Program"
                value="Data Science Courses"
                name="platform"
                required
                type="radio"
                onChange={handleParam()}
              />
              Data Science Courses&nbsp;
              <br />
              <input
                id="Software (DSA & System Design)"
                value="Software (DSA & System Design)"
                name="platform"
                required
                type="radio"
                onChange={handleParam()}
              />
            Software (DSA & System Design)
            </div>
          ) : (
            ""
          )}
          

        <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>
        <button type="submit" className={styles.button}>
          {downloadBrochure ? "Download Now" : "Apply For Counselling"}
        </button>
      </form>
    </div>
  );
};

export default Form;
