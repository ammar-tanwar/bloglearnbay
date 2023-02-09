import { useState} from "react";
import Link from 'next/link'
import Search from "../search.json";
import { slugify } from "../utils";
import styles from './search.module.css';
export default function Sidebar() {
  const [search, setSearch]= useState()
  function findSerach(value) {
   
    setSearch(value.target.value)
  }
 
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
      // onChange={onChange}
      // onFocus={onFocus}
      // placeholder='Search posts...'
      // type='text'
      // value={query}
      onChange={findSerach} 
      type="text"
      placeholder="Enter search term..."
    />
    <Link href={{ pathname: '/Search', query: { q: search?.toLowerCase() } }} > 
      <a className={styles.searchicon} ><img src="https://i.ibb.co/FXsnyyq/search.png" alt="" /></a>
    </Link>
  </div>
  )
}