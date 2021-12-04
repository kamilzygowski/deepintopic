import React from 'react';
import { useSelector } from 'react-redux';
import './Dictionary.scss';
import {FaCircle} from 'react-icons/fa';

function Dictionary () {
    const dictionary = useSelector( state => state.dictionaryReducer);
    const listItem = dictionary.map(({title, text, id}) => 
    <li className="dictionaryDef" key={id}><FaCircle className="circle" /><span className="title">{title}</span> - {text}</li>
    );
        return (
            <section className="dictionary" id="deepintopic/dictionary">
                <h1 className="dictionaryHeader">Słowniczek dla skrótów myślowych i niecodziennych wyrażeń</h1>
                <ul> {listItem} </ul>
            </section>

        );
    }


export default Dictionary;