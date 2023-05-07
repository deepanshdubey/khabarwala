import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, source, date } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex: '1'}}>
              {source}
            </span>
          {/* <img src={imageUrl?imageUrl:"https://www.hindustantimes.com/ht-img/img/2023/05/04/1600x900/Penumbral_Lunar_Eclipse_Chandra_Grahan_2023_1683178890154_1683178890290.jpg" } className="card-img-top" alt="..."/> */}
          <img
            src={imageUrl ? imageUrl : "/khabarwalaFiller.gif"}
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            
            <p className="card-text"></p>
            <small className="text-muted">
              By {source ? source : "unknown"} on {new Date(date).toGMTString()}{" "}
            </small>
            <p />
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
