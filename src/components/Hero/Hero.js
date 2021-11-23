import React from 'react';
import './Hero.scss';


class Hero extends React.Component {
    render() {
        return (
            <section className="hero" id="deepintopic/hero">
                <div className="leftPanel">
               <h1 className="heroHeader"> Pogadajmy i pospekulujmy o głupotach</h1>
               {/*<p className="heroText"> still nothing :O</p>*/}
               </div>
               <div className="rightPanel">
                   {/*<p className="heroText2"> ZAPRASZAM DO CZYTANIA</p>*/}
                   <br/>
               </div>
            </section>

        );
    }
}

export default Hero;