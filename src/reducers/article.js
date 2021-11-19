const articleReducer = (state = data.articles, action) => {
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

const data = {
    articles: [
        {
            title: "Tutaj będzie tytuł",
            text: "No co klikaj w artykuł jak chcesz coś przeczytać, jak nie to nauuura",
            text2:``,
            id: 0
        },
        {
            title: "Zbawczy oddech (hiperwentylacja)",
            text: `Dla zilustrowania, czując się w takim stanie, że już kompletnie odpadasz i czujesz się źle czy to nerwowo, psychicznie, czy to kręci ci się w głowie fizycznie. Zalecam użyć sposobu skupienia się na jednym punkcie przed sobą i wtedy głęboki wdech, głęboki wydech, stopniowo zwalniasz.`,
            text2: ` Ktoś by pomyślał, że oddech to wszystko, ale nie jest tak kolorowo. Musimy sposobem podzialac trochę na naszą neurologie i przeskoczyć frustracje spowodowaną tym że to nie działa (bo na początku nie działa). Trwając w tym przekonaniu, że za moment przyjdzie do nas ukojenie i musimy wyczekać działa zbawczo i relaksująco. No co, ogólnie wiara w rzeczy i zjawiska jest wszechpotężna, radze każdemu mocno to wykorzystywać.`,
            id: 1
        },
        {
            title: "Ukierunkowany myślenie tam gdzie chcemy",
            text: "soon bedzie artykuł :O",
            text2:``,
            id: 2
        }
    ]
}
export default articleReducer;