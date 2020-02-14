import React from 'react'
import ArticleSummary from './ArticleSummary'
import './style.css'
import ArticleError from './ArticleError';

function ArticleList(props) {
    const { articles } = props.articles
    // console.log("aticles: ", articles);
    return (
        <div>
            {
                typeof articles !== "undefined" && articles.length !== 0
                ? articles.map(article => {
                    return <div className="container articles-container">
                                <ArticleSummary article={article} key={Math.floor(Math.random() * 10000)} />
                            </div>
                })
                : <ArticleError />
            }
        </div>
    )
}

export default ArticleList
