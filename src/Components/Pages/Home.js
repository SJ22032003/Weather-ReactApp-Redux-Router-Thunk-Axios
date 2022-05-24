import React from "react";
import Input from "../Input";
import Result from "../Result";

function Home() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="myInput w-full m-3">
          <Input />
        </div>
        <div className="myResult m-3">
          <Result />
        </div>
      </div>
    </div>
  );
}

export default Home;
