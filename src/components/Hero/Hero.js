import React from 'react';
import './Hero.scss';


class Hero extends React.Component {
    render() {
        return (
            <section className="hero" id="/hero">
                <div className="leftPanel">
               <h1 className="heroHeader"> LATEST ON THE BLOG </h1>
               <p className="heroText"> still nothing :O</p>
               </div>
               <div className="rightPanel">
                   <p className="heroText2"> if there will be latest article, there will be a text :s</p>
               </div>
            </section>

        );
    }
}

export default Hero;