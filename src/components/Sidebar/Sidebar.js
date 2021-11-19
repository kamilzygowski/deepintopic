import React from 'react';
import './Sidebar.scss';
import {useDispatch} from 'react-redux';
import { chooseArticle } from '../../actions/chooseArticle';

function Sidebar () {
        const dispatch = useDispatch();
        return (
            <section className="sidebar" id="/sidebar">    
                <article class="leaderboard__profile"  onClick={() => dispatch(chooseArticle(2))}>
                    <span className="leaderboard__name">ukierunkowanie myślenia tam gdzie chcemy</span>
                    <span className="leaderboard__value">long</span>
                </article>

                <article class="leaderboard__profile" onClick={() => dispatch(chooseArticle(1))} >
                    <span className="leaderboard__name">potęga hiperwentylacji i pozytywnego myślenia (xd)</span>
                    <span className="leaderboard__value2">medium</span>
                </article>

                <article class="leaderboard__profile">
                    <span className="leaderboard__name">xsxsx</span>
                    <span className="leaderboard__value3">short</span>
                </article>

                <article class="leaderboard__profile">
                    <span className="leaderboard__name">ddd</span>
                    <span className="leaderboard__value">long</span>
                </article>
            </section>
        );
    }

export default Sidebar;