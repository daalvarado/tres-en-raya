import React from "react";
import Header from "./Header";
import Info from "./Info";
import Controls from "./Controls";
import Messages from "./Messages";
import Table from "./Table";

const Scores = (props) => (
  <div className="container">
    <Header history={props.history} />
    <Info />
    <Controls />
    <Messages />
    <Table/>
  </div>
);

export default Scores;
