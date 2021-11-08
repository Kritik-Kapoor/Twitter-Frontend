import React from 'react'
import './OutputFeed.css'
// import {Avatar} from '@material-ui/core';
import avatar2 from './avatar2.jpg';

function OutputFeed() {
    return (
        <div className="live-feed">
            <img className="profilePicture" src={avatar2} alt=""/>
            <form>
                <div className="user-info">                    
                    <span id="username">Kritik Kapoor</span>
                    <span id="userid">@_kritik</span>
                    
                </div>  
                <div id="tweet">Hello, <br/>This is my first tweet</div>
                <button type="submit" className="read-button">Mark as Read</button>
            </form>
        </div>
    )
}

export default OutputFeed;
