import React from 'react';
import './Sidebar.scss';


class Sidebar extends React.Component {
    render() {
        return (
            <section className="sidebar" id="/sidebar">    
                <article class="leaderboard__profile">
                    <span className="leaderboard__name">ukierunkowanie myślenia</span>
                    <span className="leaderboard__value">long</span>
                </article>

                <article class="leaderboard__profile">
                    <span className="leaderboard__name">cos cos</span>
                    <span className="leaderboard__value">long</span>
                </article>

                <article class="leaderboard__profile">
                    <span className="leaderboard__name">xsxsx</span>
                    <span className="leaderboard__value">long</span>
                </article>

                <article class="leaderboard__profile">
                    <span className="leaderboard__name">ddd</span>
                    <span className="leaderboard__value">long</span>
                </article>
            </section>
        );
    }
}

export default Sidebar;