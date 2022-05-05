import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsurl, author, date, source } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              <span class="position-absolute top-0 start-100 translate-middle badge badge-pill badge-danger">
                {source}
              </span>
            </h5>

            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
