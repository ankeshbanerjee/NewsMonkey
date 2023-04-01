import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { heading, description, newsUrl, imageUrl, author, date, source } =
      this.props;
    // destructuring in javascript: the new way of assigning array items to a variable, think of it as the items inside curly braces are props
    // it avoids writing this.props. repeatedly and make the code look cleaner
    return (
      <div className="container my-2" style={{position : 'relative'}}>
          <span
            className="badge rounded-pill bg-primary"
            style={{ fontSize: "12px", position: 'absolute', right: '12px', zIndex: '1'}}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{heading}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  By {author} on {new Date(date).toUTCString()}
                </small>
              </p>
              <div className="text-center">
                <a href={newsUrl} className="btn btn-primary ">
                  Read More
                </a>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Newsitem;
