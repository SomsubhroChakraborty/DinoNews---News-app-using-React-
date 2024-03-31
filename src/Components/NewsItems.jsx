import React, { Component } from 'react';

export class NewsItems extends Component {
  render() {
    let { title, description, ImageUrl, newsUrl } = this.props;
    return (
      <div className="card h-10 ">
        <img src={ImageUrl} className="card-img-top" alt="..." style={{ objectFit: 'cover', height: '100px' }} /> 
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} className="btn btn-sm btn-primary mt-auto">Read More</a> 
        </div>
      </div>
    );
  }
}

export default NewsItems;
