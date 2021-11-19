export const chooseArticle = id => {
    return {
        type: 'CHOOSEARTICLE',
        index: id
    };
};