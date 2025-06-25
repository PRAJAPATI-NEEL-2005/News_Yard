import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?category=business&apiKey=4a61f2b757024612b7080e25ab585230&pageSize=20";
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: parsedData.articles,
      totalarticles: parsedData.totalResults,
      totalpage: Math.ceil(parsedData.totalResults / 20),
    });
  }
  onPrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=4a61f2b757024612b7080e25ab585230&page=${this.state.page - 1}&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  onNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=4a61f2b757024612b7080e25ab585230&page=${this.state.page + 1 }&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Top Headlines</h1>
        {this.state.loading && <Spinner />}
       {!this.state.loading &&<div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3 my-3" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
                  }
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>}
        <div className="container my-3 d-flex justify-content-evenly">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.onPrev}
          >
            &larr; previous
          </button>
          <h3>Page no:{this.state.page} of {this.state.totalpage}</h3>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onNext}
            disabled={this.state.page === this.state.totalpage}
          >
            next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
