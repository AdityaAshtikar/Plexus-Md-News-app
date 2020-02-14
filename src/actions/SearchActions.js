export const FETCH_ARTICLES_PENDING = 'FETCH_ARTICLES_PENDING'
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS'
export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR'

export const fetchArticlesPending = () => {
    return {
        type: FETCH_ARTICLES_PENDING
    }
}

export const fetchArticlesSuccess = (articles) => {
    return {
        type: FETCH_ARTICLES_SUCCESS,
        payload: articles
    }
}

export const fetchArticlesError = (error) => {
    return {
        type: FETCH_ARTICLES_ERROR,
        payload: error
    }
}