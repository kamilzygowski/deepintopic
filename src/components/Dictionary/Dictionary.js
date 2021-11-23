import React from 'react';
import { useSelector } from 'react-redux';
import './Dictionary.scss';


function Dictionary () {
    const dictionary = useSelector( state => state.dictionaryReducer);
    const listItem = dictionary.map(({title, text, id}) => 
    <li className="dictionaryDef" key={id}><span className="title">{title}</span> - {text}</li>
    );
        return (
            <section className="dictionary" id="/dictionary">
                <h1 className="dictionaryHeader">Słowniczek dla skrótów myślowych i niecodziennych wyrażeń</h1>
                <ul> {listItem} </ul>
            </section>

        );
    }


export default Dictionary;