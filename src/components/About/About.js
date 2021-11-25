import React from 'react';
import './About.scss';


class About extends React.Component {
    render() {
        return (
            <section className="about" id="deepintopic/about">
               <div className="aboutLeftPanel">
               <h1 className="aboutHeader"> Siemka </h1>
               <p className="aboutText"> Witam Cię na czymś w rodzaju bloga z przymrużeniem oka. Tak naprawdę jest to jak to lubię nazywać: śmietnik na moje myśli, rady i coś w rodzaju dziennika.</p>
               </div>
               <div className="aboutRightPanel">
               <div className="aboutBox">
                   <div className="aboutMinibox">
                   
                        <p className="aboutText"> Rozprawiamy tutaj o filozofii</p>
                        <img className="aboutImage" src="https://i.postimg.cc/zvKqqY6b/pexels-dominika-roseclay-1244705.jpg"></img>
                        <p className="aboutText"> egzystencjalizm etc </p>
                        
                   </div>
                   <div className="aboutMinibox">
                        
                        <p className="aboutText">  o psychologii</p>
                        <img className="aboutImage" src="https://i.postimg.cc/bNfz3dSQ/pexels-vijay-sadasivuni-3833370.jpg"></img>
                        <p className="aboutText">  codziennej / poznawczej</p>
                   </div>
                   <div className="aboutMinibox">
                   
                        <p className="aboutText"> o wszystkim</p>
                        <img className="aboutImage" src="https://i.postimg.cc/J0ZkDnGR/pexels-capped-x-9695480.jpg"></img>
                        <p className="aboutText"> i o niczym</p>
                        
                   </div>
               </div>
               </div>
               <p className="aboutText"> Może kiedyś będzie sekcja komentarzy, kto wie :O</p>
            </section>

        );
    }
}

export default About;