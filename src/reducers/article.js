import { articles } from "../data/articles";

const articleReducer = (state = articles.articles, action) => {
    switch (action.type) {
        case 'CHOOSEARTICLE':
            return {
                ...state,
                ...state[action.index]
            }
        default:
            return {
                ...state,
                ...state[0]
            }
    }
};
export default articleReducer;