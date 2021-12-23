import React from 'react';
import './About.scss';


class About extends React.Component {
    render() {
        return (
            <section className="about" id="deepintopic/about">
               <div className="aboutLeftPanel">
               {/*<h1 className="aboutHeader"></h1>*/}
               <p className="aboutText1"> Deep in topic to projekt stworzony w głównej mierze, aby poprawiać jakość psychicznego życia czytelników, ale ma też funkcję naukową, rozweselającą i ma dawać nadzieję na lepsze jutro</p>
               </div>
               <div className="aboutRightPanel">
               <div className="aboutBox">
                   <div className="aboutMinibox">
                   
                        <p className="aboutText"> Rozprawiamy tutaj o filozofii</p>
                        <img className="aboutImage" alt='img' src="https://i.postimg.cc/zvKqqY6b/pexels-dominika-roseclay-1244705.jpg"></img>
                        <p className="aboutText"> wszelkiej filozofii </p>
                        
                   </div>
                   <div className="aboutMinibox">
                        
                        <p className="aboutText">  o psychologii</p>
                        <img className="aboutImage" alt='img' src="https://i.postimg.cc/bNfz3dSQ/pexels-vijay-sadasivuni-3833370.jpg"></img>
                        <p className="aboutText">  klinicznej / poznawczej</p>
                   </div>
                   <div className="aboutMinibox">
                   
                        <p className="aboutText"> o wszystkim</p>
                        <img className="aboutImage" alt='img' src="https://i.postimg.cc/J0ZkDnGR/pexels-capped-x-9695480.jpg"></img>
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