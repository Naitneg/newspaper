import React from "react";
import "./News.scss";

function News(props) {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div className="posti">
    <div className="karta bg-light-blue dib br2 pa3 ma2 grow bw2 shadow-5">
      <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="12" />
      <div>
        <h2>{props.titulli}</h2>
        <p>{props.bodi}</p>
        
        <p className="data">Published date: {date}</p>
      </div>
      
    </div>
    </div>
  );
}

export default News;
