import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import OneNew from "./OneNew";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=2")
      .then((resp) => resp.json())
      .then((response) => {
        setNews(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="news">
        <h2>News</h2>
        <div className="newsSection">
          {news.map((onepost) => (
            <OneNew
              key={onepost.id}
              newTitle={onepost.title}
              newText={onepost.body}
            />
          ))}
        </div>
      </div>
      <Footer style={{ color: "black" }} />
    </div>
  );
};

export default News;

