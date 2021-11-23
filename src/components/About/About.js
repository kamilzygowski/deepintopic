import React from 'react';
import './About.scss';


class About extends React.Component {
    render() {
        return (
            <section className="about" id="/about">
               <h1 className="aboutHeader"> Siemka </h1>
               <p className="aboutText"> Witam Cię na czymś w rodzaju bloga z przymrużeniem oka. Tak naprawdę jest to jak to lubię nazywać: śmietnik na moje myśli, rady i coś w rodzaju dziennika.</p>
               <div className="aboutBox">
                   <div className="aboutMinibox">
                        <p className="aboutText"> Rozprawiamy tutaj o filozofii</p>
                        <img className="aboutImage" src="https://i.postimg.cc/zvKqqY6b/pexels-dominika-roseclay-1244705.jpg"></img>
                   </div>
                   <div className="aboutMinibox">
                        <img className="aboutImage" src="https://i.postimg.cc/bNfz3dSQ/pexels-vijay-sadasivuni-3833370.jpg"></img>
                        <p className="aboutText">  o psychologii</p>
                   </div>
                   <div className="aboutMinibox">
                        <p className="aboutText"> o wszystkim i o niczym</p>
                        <img className="aboutImage" src="https://i.postimg.cc/J0ZkDnGR/pexels-capped-x-9695480.jpg"></img>
                   </div>
               </div>
            </section>

        );
    }
}

export default About;