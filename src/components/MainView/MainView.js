import React from 'react';
import './MainView.scss';
import { useSelector } from 'react-redux';
import {FaArrowAltCircleUp} from 'react-icons/fa';


function MainView() {

    const article = useSelector(state => state.articleReducer);
    const dictionary = useSelector( state => state.dictionaryReducer);

    return (
        <section className="mainview" id="deepintopic/mainview">

            <div className="inner-border">
                <img className="vertical-decoration top" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png" alt="deco"></img>
                {/*{article.titleImg ? <img className="articleTitleImg" alt=" " src={article.titleImg}/> : null}*/}
                <h2 className="mainviewTitle"> {article.title} </h2>
                <img className="arrows" src="https://i.postimg.cc/xjXZ6hPP/Untitled31.png" alt="arrow" />
                {article.text ? <p className="articleText"> {article.text}{/*dictionary.forEach(element => {

                    let split = article.text.split(" ");
                    let word = split.find(param => param === element.title);
                    console.log(word);
                    if(word ===  element.title && word !== undefined){
                        split[split.indexOf(word)] = `<span className='red'>{element.title}</span>`;
                    }
                    console.log(split);

                    })*/}</p> : null}
                {article.img1 ? <img className="articleImg" alt=" " src={article.img1} /> : null}
                {article.text2 ? <p className="articleText"> {article.text2}</p> : null}
                {article.img2 ? <img className="articleImg" alt=" " src={article.img2} /> : null}
                {article.text3 ? <p className="articleText"> {article.text3}</p> : null}
                {article.img3 ? <img className="articleImg" alt=" " src={article.img3} /> : null}
                {article.text4 ? <p className="articleText"> {article.text4}</p> : null}
                {article.img4 ? <img className="articleImg" alt=" " src={article.img4} /> : null}
                <br />
                <img className="arrows" src="https://i.postimg.cc/xjXZ6hPP/Untitled31.png" alt="arrow" />
                <br />
                <img className="vertical-decoration bottom" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png" alt="deco"></img>
                <FaArrowAltCircleUp className="scrollUpIcon" onClick={() => {
                    window.scrollTo({
                        top:0,
                        behavior:"smooth",
                    });
                }}/>
            </div>

        </section>
    );
}


export default MainView;