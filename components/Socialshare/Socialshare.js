import React from 'react'
import styles from "../../styles/blog.module.css";
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
} from 'next-share';

export default function Text() {
    return (
        <>
            <div className={styles.socialshare}>
                <FacebookShareButton
                    url={'http://localhost:3000'} >
                    <FacebookIcon size={42} round className={styles.share} />
                </FacebookShareButton>
                <PinterestShareButton
                    url={'http://localhost:3000'} >
                    <PinterestIcon size={42} round className={styles.share} />
                </PinterestShareButton>
                {/* <TwitterShareButton 
		url={'http://localhost:3000'} >
		<TwitterIcon size={42} round className={styles.share} />
	</TwitterShareButton> */}
                <RedditShareButton
                    url={'http://localhost:3000'} >
                    <RedditIcon size={42} round className={styles.share} />
                </RedditShareButton>
                <WhatsappShareButton
                    url={'http://localhost:3000'} >
                    <WhatsappIcon size={42} round className={styles.share} />
                </WhatsappShareButton>
                <LinkedinShareButton
                    url={'http://localhost:3000'} >
                    <LinkedinIcon size={42} round className={styles.share} />
                </LinkedinShareButton>
                <TwitterShareButton
                    url={'http://localhost:3000'} >

                    <TwitterIcon size={42} round className={styles.share} />


                </TwitterShareButton>
            </div>

        </>
    )
}
