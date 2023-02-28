import React, { useState,useEffect } from "react";
import Link from 'next/link'
import Search from "../search.json";
import { slugify } from "../utils";
import styles from './search.module.css';
import Image from "next/image";




export default function Sidebar() {
  const [search, setSearch] = useState()
  function findSerach(value) {

    setSearch(value.target.value)
  }

  useEffect(() => {
    // 
    var input = document.getElementById("myInput");
    input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
  });
  });
  
  

  return (
    // <div className="col-lg-4">

    //   <div className="card mb-4">
    //     <div className="card-header">Search</div>
    //     <div className="card-body">
    //       <div className="input-group">
    //         <input onChange={findSerach} className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
    //         <Link href={{ pathname: '/Search', query: { q: search?.toLowerCase() } }}> 
    //           <a className="btn btn-primary" id="button-search">Go!</a>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div
      className={styles.container}
    >
      <input
        className={styles.search}
        id="myInput"
        onChange={findSerach}
        type="text"
        placeholder="Enter search term..."
      />
      <Link href={{ pathname: '/Search', query: { q: search?.toLowerCase() } }} >
        <a className={styles.searchicon} id="myBtn"><Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/search.png" alt="" height={20} width={20} /></a>
      </Link>    
    </div>
  )
}