const dictionaryReducer = (state = data.phrases) => {
 return state;
};

const data = {
    phrases: [
        {
            title: "mindset",
            text: "nastawienie psychiczne",
            id: 0
        },
        {
            title: "somatyzacja",
            text: "myślenie o swoim ciele (np. odczuwanie bólu, poczucie bycia bytem fizycznym etc.)",
            id: 1
        }
      
    ]
}
export default dictionaryReducer;