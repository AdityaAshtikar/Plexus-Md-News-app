import moment from "moment";
import React from 'react'

function ArticleSummary(props) {
    const { article } = props;
    const publishedAt = article.publishedAt;
    const author = article.author !== null ? article.author : "Anonymous";
    var dt = moment(publishedAt);
    dt = dt.format('YYYY-MM-DD h:mm:ss A');
    return (
            <div className="card article">
                <a href={article.urlToImage} target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top" src={article.urlToImage} alt={article.title} />
                </a>
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.content}</p>
                </div>
                <div className="card-footer">
                    <p className="card-text">
                    Author: <em>{author}</em><br />
                    Published At: <em>{dt}</em><br />
                    Source: <em>{article.source.name}</em></p>
                </div>
            </div>
    )
}

export default ArticleSummary
