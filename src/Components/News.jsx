import React, { Component } from 'react';
import NewsItems from './NewsItems';

export class News extends Component {
  constructor() {
    super();
    console.log("Hi I am a constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1 // Initialize page state
    };
  }

  handleNextClick = async () => {
    console.log("next")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dcd64be49f5d499b8c18d270a9a96950&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles
    });
  }

  handlePrevClick = async () => {
    console.log("prev");
    // Check if it's the first page to prevent going to negative page numbers
    if (this.state.page > 1) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dcd64be49f5d499b8c18d270a9a96950&page=${this.state.page - 1}`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page - 1,
        articles: parseData.articles
      });
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=dcd64be49f5d499b8c18d270a9a96950";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }

  render() {
    console.log("render");
    return (
      <>
        <div className="container my-3">
          <h1>DinoNews - Top Headlines</h1>
          <br />
          <div className="row">
            {this.state.articles.map((element, index) => (
              <div className="col-md-4" key={index}>
                <NewsItems
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  ImageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
