import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

import "../CSS/Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
  
        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>
  
          <TwitterTweetEmbed tweetId={"1306240190328045570"} />
  
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="samuel_ardis"
            options={{ height: 400 }}
          />
  
          <TwitterShareButton
            url={"https://www.facebook.com/Ardissam0"}
            options={{ text: "#reactjs is awesome", via: "Ardissam0" }}
          />
        </div>
      </div>
    )
}

export default Widgets
