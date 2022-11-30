import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsurl, date, author, source } = this.props
        return (
            <div>
                <div className="card">
                    <div style={{ display: "flex", position: "absolute", right: "0", justifyContent: "flex-end" }}>
                        <span className="badge rounded-pill bg-danger" >
                            {source}
                        </span>
                    </div>
                    <img src={!imageUrl ? "https://images.wsj.net/im-505008/social" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <small className="text-muted">Last updated: {new Date(date).toGMTString()} BY {author ? author : 'Unknown'}</small>
                        <p className="card-text"> {description}</p>

                        <a href={newsurl} className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
