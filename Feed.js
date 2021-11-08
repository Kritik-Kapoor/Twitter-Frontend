import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import OutputFeed from './OutputFeed';
/*import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';*/


function Feed() {
    return (
        <div className="feed-container">
            <div id="header">
                <span>Twitter</span>    
                {/* <FontAwesomeIcon icon={["fab", "twitter"]} />   */}
            </div>
            <TweetBox/>
            <OutputFeed/>
        </div>
    )
}

export default Feed;
