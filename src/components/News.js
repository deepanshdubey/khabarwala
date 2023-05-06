import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'




export default class News extends Component {

  capitalizeFirstLetter = (string) => {
    return (string.charAt(0).toUpperCase() + string.slice(1));
  }

  static defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  articles = []

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };

    document.title = `${this.capitalizeFirstLetter(this.props.category)} | KhabarWala - Daily News` 
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=95fa6ed06ee34f79a7acba33d528ff0b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });

  }

  async componentDidMount() {
    this.updateNews();

  }

  // if(this.state.page + 1 > (Math.state.totalResults/20))

  // movetoNextPage = async () => {

  handlePrevClick = async () => {
    this.setState({page: this.state.page - 1});
    this.updateNews();

  };

  handleNextClick = async () => {
    this.setState({page: this.state.page + 1});
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{fontWeight: '600', fontFamily: 'sans-serif'}}>Khabarwala - {this.props.category}</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : "Khabarwala"}
                    description={
                      element.description
                        ? element.description
                        : "Top Headlines"
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    source={element.source.name}
                    author = {element.author}
                    date = {element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            id="nextButton"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
