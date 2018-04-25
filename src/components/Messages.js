import React from "react";

const Messages = props => (
  <div className="messages">
    <div id="message-box">{props.message}</div>
  </div>
);

export default Messages;
