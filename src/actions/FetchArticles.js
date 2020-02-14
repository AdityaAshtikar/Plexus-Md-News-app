import { fetchArticlesPending, fetchArticlesSuccess, fetchArticlesError } from "./SearchActions";
import axios from "axios";
import store from "../store";

const fetchArticles = (q) => {
    // console.log("query string: ", q);
    let url = 'https://newsapi.org/v2/everything?q=' + q + '&from=2020-02-12&to=2020-02-13&sortBy=popularity&apiKey=129f9eae3a934c2bb5cd1a8ae9807064'
    return async () => {
        store.dispatch(fetchArticlesPending());
        await axios.get(url).then(res => {
            store.dispatch(fetchArticlesSuccess(res.data))
        }).catch(error => {
            store.dispatch(fetchArticlesError(error))
        })
    }
}

export default fetchArticles