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
            title: "Podejście metafizyczne i egzystencjalne",
            text: "Przede wszystkim zacznijmy trochę od tematu artykułu. Uściślam się w nim do dwóch sposbów myślenia, tak zwanych 'mindsetów', a mianowicie mindsetu metafizycznego, gdzie poczucie naszego bytu lokuje się gdzieś na poziomie - niewazne co się stanie i tak będę jednolitym bytem duchowym nawet jak umrę. Drugie podejście jest zaś 'egzystencjalnym' - gdzie bardziej kładziemy nacisk na tu i teraz, oraz na swoje wszystkie objawy somatyczne (boimy się śmierci)",
            text2:``,
            id: 3
        },
        {
            title: "Omori - PTSD/wyparcie",
            text: "Krótkie intro: Omori jest to gra, w której doświadczamy świat jako osoba (jak się wydaje na pierwszy rzut oka) z depresją czy podobnym zaburzeniem. Jako bohater mamy 2 osobowości - prawdziwą i ochronną. Cała akcja rozgrywa się na przemian w świecie prawdziwym, jak i w tak zwanym 'white spacie', które jest swego rodzaju kaftanem ochronnym na mózg, gdzie bohater konserwuje swoje myśli, pragnienia, dzieciństwo, traumy itd",
            text2:``,
            id: 4
        }
    ]
}
export default articleReducer;