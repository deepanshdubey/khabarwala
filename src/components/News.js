import React from "react";
import NewsItem from "./NewsItem";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  document.title = `${capitalizeFirstLetter(props.category)} | KhabarWala - Daily News`;

  const updateNews = async () => {
    props.setProgress(0);

    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&country=${props.country}&lang=en&apikey=${props.apiKey}&max=${props.pageSize}`;

    props.setProgress(30);

    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    setPage(parsedData.page);
    settotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&country=${props.country}&lang=en&apikey=b69d624070436ebf4f65259760c33985&max=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <div className="container " style={{ marginTop: "6rem"}}>
      <h1
        className="text-center"
        style={{ fontWeight: "600", fontFamily: "sans-serif" }}
      >
        KhabarWala - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      <div className="row">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div
            className="renderInfiniteScroll"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
          >
            {articles.map((element) => {
              return (
                <div className="" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : "Khabarwala"}
                    description={
                      element.description
                        ? element.description
                        : "Top Headlines"
                    }
                    imageUrl={element.image}
                    newsUrl={element.url}
                    source={element.source.name}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
