import React from 'react';
import './MainView.scss';
import {useSelector} from 'react-redux';


function MainView () {

        const article = useSelector(state => state.articleReducer);
        return (
            <section className="mainview" id="/mainview">   
                <h2 className="mainviewTitle"> {article.title} </h2> 
                <img className="arrows" src="https://i.postimg.cc/xjXZ6hPP/Untitled31.png"/>
                <p className="articleText"> {article.text}</p>       
                <p className="articleText"> {article.text2}</p>
                <img className="arrows" src="https://i.postimg.cc/xjXZ6hPP/Untitled31.png"/>
            </section>
        );
    }


export default MainView;