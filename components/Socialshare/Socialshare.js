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

function Text({socialText}) {
    return (
        <>

        {
            socialText.map((socialText, index) => {
                let murl = socialText.id.replace(" ", "-");
                let url = `/${murl}`;
        
        return(
            <div className={styles.socialshare}>
                <FacebookShareButton
                    url={url} >
                    <FacebookIcon size={42} round className={styles.share} />
                </FacebookShareButton>
                <PinterestShareButton
                    url={url} >
                    <PinterestIcon size={42} round className={styles.share} />
                </PinterestShareButton>
                {/* <TwitterShareButton 
		url={url } >
		<TwitterIcon size={42} round className={styles.share} />
	</TwitterShareButton> */}
                <RedditShareButton
                    url={url} >
                    <RedditIcon size={42} round className={styles.share} />
                </RedditShareButton>
                <WhatsappShareButton
                    url={url } >
                    <WhatsappIcon size={42} round className={styles.share} />
                </WhatsappShareButton>
                <LinkedinShareButton
                    url={url} >
                    <LinkedinIcon size={42} round className={styles.share} />
                </LinkedinShareButton>
                <TwitterShareButton
                    url={url} >

                    <TwitterIcon size={42} round className={styles.share} />


                </TwitterShareButton>
            </div>
        )    
        })}

        </>
    )
}

export default Text
