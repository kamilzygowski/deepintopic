import React from 'react';
import './MainView.scss';
import {useSelector} from 'react-redux';


function MainView () {

        const article = useSelector(state => state.articleReducer);
        return (
            <section className="mainview" id="/mainview">   
                <h2 className="mainviewTitle"> {article.title} </h2> 
                <p className="articleText"> {article.text}</p>       
                <p className="articleText"> {article.text2}</p>
            </section>
        );
    }


export default MainView;