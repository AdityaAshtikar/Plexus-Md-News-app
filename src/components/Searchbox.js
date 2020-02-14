import React, { Component } from 'react'
import fetchArticles from '../actions/FetchArticles';

class Searchbox extends Component {
    state = {
        q: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props);
        this.props.props.dispatch(fetchArticles(this.state.q));
        // this.props.props.fetchArticles(this.state.q)
    }

    handleChange = (e) => {
        this.setState({
            q: e.target.value
        })
    }

    render() {
        // console.log("props: ", this.props)
        return (
            <div className="container searchbox">
                <div className="jumbotron">
                    <div className="container">
                        <h3 className="display-4">Search For News Articles</h3>
                        <form onSubmit={this.handleSubmit}>
                            <input autoFocus placeholder="Enter Search Keyword" type="text" id="searchQuery" className="form-control" onChange={this.handleChange} />
                            <button className="btn btn-primary btn-block">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapDispatchToProps

export default Searchbox
