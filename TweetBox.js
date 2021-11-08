import React from 'react';
import './TweetBox.css';
import avatar2 from './avatar2.jpg';
function TweetBox() {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweet">
                    <img class="tweet profilePicture" src={avatar2} alt="" />
                    <textarea name="Text1" cols="40" rows="5" placeholder="What's happening?"></textarea>
                </div>  
                <button type="submit" className="tweet-button">Tweet</button>
            </form>            
        </div>
    )
}

export default TweetBox;
