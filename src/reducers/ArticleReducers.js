import { FETCH_ARTICLES_PENDING, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_ERROR } from "../actions/SearchActions";

const initState = {
    pending: false,
    articles: [],
    error: null
}

export const ArticleReducers = (state=initState, action) => {
    switch (action.type) {
        case FETCH_ARTICLES_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                pending: false,
                error: null,
                articles: action.payload
            }
        case FETCH_ARTICLES_ERROR: 
            return {
                ...state,
                pending: false,
                error: action.error
            }
    
        default:
            return state
    }
}

// export const getArticles = state => state.articles
// export const getArcilesPending = state => state.pending
// export const getArticleError = state => state.error