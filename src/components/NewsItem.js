import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, source, date } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div className="position-absolute" style={{display:'flex' , right: '0'}}>
          <span className="badge rounded-pill bg-danger" >
              {source}
            </span>
          </div>
        
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
export default NewsItem
