import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfinitScroll from 'react-infinite-scroll-component';
import "./News.css";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsYard`;
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async componentDidMount() {
    this.props.setprogress(20);
    let url =
      `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pagesize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setprogress(40);

    let parsedData = await data.json();
    this.props.setprogress(60);

    this.setState({ loading: false });
    this.props.setprogress(80);

    this.setState({
      articles: parsedData.articles,
      totalarticles: parsedData.totalResults,
      totalpage: Math.ceil(parsedData.totalResults / this.props.pagesize),
    });
    this.props.setprogress(100);
  }
 
  fetchNextArticles = async() => {
    const nextPage = this.state.page + 1;
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pagesize}&page=${nextPage}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    
    if (!parsedData.articles || parsedData.articles.length === 0) {
      return;
    }
    
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalarticles: parsedData.totalResults,
      page: nextPage
    });
  }

  render() {
    const { category } = this.props;
    const categoryTitle = this.capitalizeFirstLetter(category);
    
    return (
      <div className="news-container">
        <h1 className="news-heading">
          Top Headlines 
          {category !== "general" && (
            <span className="category-badge">{categoryTitle}</span>
          )}
        </h1>
        
        <InfinitScroll
          dataLength={this.state.articles.length}
          next={this.fetchNextArticles}
          hasMore={this.state.articles.length !== this.state.totalarticles}
          loader={
            <div className="loading-container">
              <Spinner />
            </div>
          }
          endMessage={
            <p style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
              <b>You've seen all the news!</b>
            </p>
          }
        >
          <div className="news-grid">
            {this.state.articles.map((element, index) => (
              <Newsitem
                key={`${element.url}-${index}`}
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageurl={element.urlToImage}
                newsurl={element.url}
                publishdate={element.publishedAt}
                source={element.source.name}
                author={element.author}
              />
            ))}
          </div>
        </InfinitScroll>
      </div>
    );
  }
}

export default News;
