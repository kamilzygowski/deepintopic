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
            title: "Witam u mnie, siadaj, wstaw popcorn i czytaj",
            text: "No co klikaj w artykuł jak chcesz coś przeczytać, jak nie to nauuura",
            text2:``,
            id: 0
        },
        {
            title: "Zbawczy oddech (hiperwentylacja)",
            text: `Dla zilustrowania, czując się w takim stanie, że już kompletnie odpadasz i czujesz się źle czy to nerwowo, psychicznie, czy to kręci ci się w głowie fizycznie. Zalecam użyć sposobu skupienia się na jednym punkcie przed sobą i wtedy głęboki wdech, głęboki wydech, stopniowo... zwalniasz...`,
            text2: ` Ale kluczem w żadnym stopniu nie jest oddech, tylko nastawienie. Musimy sposobem podzialac trochę na naszą neurologie i przeskoczyć frustracje spowodowaną tym że oddech działa (bo na początku nie działa). Trwając w tym przekonaniu, że za moment przyjdzie do nas ukojenie musimy wyczekać... No co, ogólnie wiara w rzeczy i zjawiska jest wszechpotężna, radze każdemu mocno to wykorzystywać.`,
            id: 1
        },
        {
            title: "Ukierunkowany myślenie tam gdzie chcemy",
            text: "ło kurwe, jak ten artykuł wyjdzie to buzia będzie otwierana",
            text2:``,
            id: 2
        },
        {
            title: "Tu tez cos fajnego bedzie",
            text: "soon bedzie artykuł :O",
            text2:``,
            id: 3
        },
        {
            title: "tu teez",
            text: "soon bedzie artykuł :O",
            text2:``,
            id: 4
        }
    ]
}
export default articleReducer;