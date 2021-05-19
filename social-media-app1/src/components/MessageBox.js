import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import db from "../config/firebase";

import "../CSS/MessageBox.css"

function MessageBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
  
    const sendTweet = (e) => {
      e.preventDefault();
  
      db.collection("posts").add({
        displayName: "Sam Ardis",
        username: "samuel-ardis",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "",
      });
  
      setTweetMessage("");
      setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
            <div className="tweetBox__input">
                <Avatar src="" />
                <input
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage}
                placeholder="What's happening?"
                type="text"
                />
            </div>
            <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput"
                placeholder="Optional: Enter image URL"
                type="text"
            />
    
            <Button
                onClick={sendTweet}
                type="submit"
                className="tweetBox__tweetButton"
            >
                Post
            </Button>
            </form>
      </div>
    )
}

export default MessageBox
