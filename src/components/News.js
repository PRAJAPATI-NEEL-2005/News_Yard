import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfinitScroll from 'react-infinite-scroll-component'

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
    document.title=`${this.props.category}-News_Yard`
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
    console.log(this.state.totalarticles)
        this.props.setprogress(100);

  }
 
  fetchNextArticles =async()=>{
this.setState({ page: this.state.page + 1 });
let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
       if (!parsedData.articles || parsedData.articles.length === 0) {
      this.setState({ loading: false });
      return;
    }
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalarticles: parsedData.totalResults,
      loading: false 
    });

  }

  render() {
    return (
      <div className="container mt-5 " style={{marginBottom:'100px'}} >
        <h1 className="text-center  "  style={{marginTop:'80px'}}>Top Headlines from {this.props.category}</h1>
     
  <InfinitScroll
        dataLength = {this.state.articles.length}
        next = {this.fetchNextArticles}
        hasMore = {this.state.articles.length!==this.state.totalarticles}
        loader={this.state.loading &&<Spinner />}
      >
        <div className="container" >
       <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3 my-3" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0,50) : ""}
                  description={element.description ? element.description.slice(0,90) : ""}
                  imageurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
                  }
                  newsurl={element.url}
                  publishdate={element.publishedAt.slice(0, 10)}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfinitScroll>
      
      </div>
    );
  }
}

export default News;
