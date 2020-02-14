import React, { Component } from 'react'
import Searchbox from './Searchbox'
import { connect } from 'react-redux';
import ArticleList from "./ArticleList";
import ArticleError from './ArticleError';
import Loader from './Loader';

class Articles extends Component {
    render() {
        const { pending, articles, error } = this.props.data
        // console.log("pending, articles, error: ", pending, articles, error);
        return (
            <div className="container-fluid">
                <Searchbox props={this.props} />
                { (error === null || articles.length > 0 ) ? (!pending ? <ArticleList articles={articles} /> : <Loader />) : <ArticleError error={error} /> }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // error: getArticleError(state),
    // pending: getArcilesPending(state),
    // articles: getArticles(state)
    data: state
});

// const mapDispatchToProps = (dispatch, q) => ({
//     fetchArticles: fetchArticles(q)
// });

export default connect(mapStateToProps) ( Articles )