import React from 'react';
import './Sidebar.scss';
import {useDispatch} from 'react-redux';
import { chooseArticle } from '../../actions/chooseArticle';

function Sidebar () {
        const dispatch = useDispatch();
        return (
            <section className="sidebar" id="/sidebar"> 
            <div className="row">
            <article className="leaderboard__profile" onClick={() => dispatch(chooseArticle(0))}>
                    <span className="leaderboard__name welcomingArticle">Artykuł powitalny</span>
                    
                </article>

                <article className="leaderboard__profile" onClick={() => dispatch(chooseArticle(2))}>
                    <span className="leaderboard__name">ukierunkowanie myślenia</span>
                    <span className="leaderboard__value">long</span>
                </article>

                <article className="leaderboard__profile" onClick={() => dispatch(chooseArticle(1))} >
                    <span className="leaderboard__name">potęga hiperwentylacji</span>
                    <span className="leaderboard__value3">short</span>
                </article>

                </div>

                <div className="row">

                    
                <article className="leaderboard__profile" onClick={() => dispatch(chooseArticle(3))}>
                    <span className="leaderboard__name">podejście metafizyczne i egzystencjalne</span>
                    <span className="leaderboard__value2">medium</span>
                </article>
                
                <article className="leaderboard__profile" onClick={() => dispatch(chooseArticle(4))}>
                    <span className="leaderboard__name">Omori PTSD/wyparcie</span>
                    <span className="leaderboard__value">long</span>
                </article>

                <article className="leaderboard__profile" onClick={() => dispatch(chooseArticle(5))}>
                    <span className="leaderboard__name">Sprawy wymagające mózgu</span>
                    <span className="leaderboard__value2">medium</span>
                </article>

                </div>
                <div className="row">
                <article className="leaderboard__profile" onClick={() => dispatch(chooseArticle(6))}>
                    <span className="leaderboard__name">Żyj długo i twórczo</span>
                    <span className="leaderboard__value">long</span>
                </article>

                <article className="leaderboard__profile" onClick={() => dispatch(chooseArticle(7))}>
                    <span className="leaderboard__name">Jak powstaje lęk</span>
                    <span className="leaderboard__value">long</span>
                </article>

                <article className="leaderboard__profile" onClick={() => dispatch(chooseArticle(8))}>
                    <span className="leaderboard__name">Wprowadzenie do świadomego śnienia</span>
                    <span className="leaderboard__value">long</span>
                </article>
                </div>
            </section>
        );
    }

export default Sidebar;