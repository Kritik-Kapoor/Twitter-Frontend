import React from 'react';
import './TimeLineFeed.css';
import { TwitterTimelineEmbed,
         TwitterShareButton,
         TwitterTweetEmbed 
        } from 'react-twitter-embed';

function TimeLineFeed() {
    return (
        <div className="widgets">
            <div id="widgets-input">
                <input type="text" placeholder="Search Twitter"/>
            </div>
            <div class="Timeline">
                <h2>What's happening</h2>    
                <TwitterTweetEmbed tweetId={"1398368481696010241"}/>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="TrashTastePod"
                    options={{height: 400}}
                />
                <TwitterShareButton
                    options={{ text: "Hello @kapoor_kritik. Project link :"}}
                    url={"http://kritik-kapoor.github.io/project1/"}
                />
            </div> 
        </div>
    )
}

export default TimeLineFeed;
