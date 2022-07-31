import React from "react";
import News from "./News";
import "./NewsList.scss";

function NewsList({posts}) {
  const newscomponent = posts.map ((user, i) => {
    return <News key={i} titulli={posts[i].title} bodi={posts[i].body} />
  });
  return (
  <div className="cards">
    
    {newscomponent}
  </div>
  );
}

export default NewsList;
