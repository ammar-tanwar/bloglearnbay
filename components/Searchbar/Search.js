import React from 'react'
import styles from '../../styles/blogM.module.css'


export default function Search() {
  return (
    <div>
        <form method = "get" title = "Search Form" action="https://cse.google.com/cse/publicurl">
 <div>
    <input type="text" className={styles.input} id="q" name="q" title="Search this site" alt="Search Text" placeholder='Search for blog...'/>
    <input type="hidden" id="cx" name="cx" value="d325097d6e63f4f87" />
   <input type="image" className={styles.inputimg} id="searchSubmit" name="submit" src="https://i.ibb.co/CvcDr91/search.png" alt="Go" title="Submit Search Query" />
 </div>
</form>
    </div>
  )
}
