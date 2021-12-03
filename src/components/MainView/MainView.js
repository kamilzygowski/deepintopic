import React from 'react';
import './MainView.scss';
import {useSelector} from 'react-redux';


function MainView () {

        const article = useSelector(state => state.articleReducer);
        return (
            <section className="mainview" id="deepintopic/mainview">  
            
            <div className="inner-border">
            <img className="vertical-decoration top" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png" alt="deco"></img> 

                <h2 className="mainviewTitle"> {article.title} </h2> 
                <img className="arrows" src="https://i.postimg.cc/xjXZ6hPP/Untitled31.png" alt="arrow"/>
                {article.text ? <p className="articleText"> {article.text}</p> : null}
                {article.img1 ? <img className="articleImg" alt=" " src={article.img1}/> : null}       
                {article.text2 ? <p className="articleText"> {article.text2}</p> : null}
                {article.img2 ? <img className="articleImg" alt=" " src={article.img2}/> : null}     
                {article.text3 ? <p className="articleText"> {article.text3}</p> : null}
                <br/>
                <img className="arrows" src="https://i.postimg.cc/xjXZ6hPP/Untitled31.png" alt="arrow"/>
                <br/>
                <img className="vertical-decoration bottom" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png" alt="deco"></img>
                </div>
                
            </section>
        );
    }


export default MainView;