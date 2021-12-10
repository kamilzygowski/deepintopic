import React from 'react';
import './Contact.scss';


function Contact () {
        return (
            <section className="contact" id="deepintopic/contact">
                <h1 className="contactHeader">Aby się ze mną skontaktować przejdź<br/> <a className="contactLink" href="https://swedishsailor.github.io/">tutaj</a></h1>
                {/*<iframe src="https://swedishsailor.github.io/" alt="cosmos"/>*/}
                <p className='contactText'> Chętnie przeczytam wszelkie opninie, krytykę, pomysły na nowe artykuły jak i jakie uczucia Ci towarzyszyły czytając poszczególne rzeczy. Również mam nadzieję, że któryś artykuł wniósł coś do twojego życia :)</p>
            </section>

        );
    }


export default Contact;