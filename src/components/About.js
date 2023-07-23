import React from 'react';
import '../styles/About.css';
import AboutImg from '../assets/undraw_proud_coder_re_exuy.svg';
import Fast from '../assets/icons8-quick-mode-on-96.png';
import Lines from '../assets/sammy-water-from-the-shower-head.png';

function About({ changeState }) {

    return(
      <main>
        <div id='top-about'>
          <figure id='about-img--wrapper'>
            <img src={AboutImg}/>
          </figure>
          <div id='about-text'>
            <h1>About Me.</h1>
            <h2>Non magna pariatur Lorem ipsum proident commodo labore.</h2>
          </div>
        </div>
        <div id='bottom-about'>
          <div id='social-links'>
            <img className='social-link one' src=''/>
            <img className='social-link two' src=''/>
            <img className='social-link three' src=''/>
          </div>
          <div id='em-points--wrapper'>
            <div className='point--container'>
              <h3>Cillum irure Lorem proident irure sit incididunt qui laboris labore laboris exercitation sit reprehenderit sit.</h3>
              <img src={Fast} className='point-icon'/>
            </div>
            <div className='point--container'>
              <h3>Cillum irure Lorem proident irure sit incididunt qui laboris labore laboris exercitation sit reprehenderit sit.</h3>
              <img src={Fast} className='point-icon'/>
            </div>
            <div className='point--container'>
              <h3>Cillum irure Lorem proident irure sit incididunt qui laboris labore laboris exercitation sit reprehenderit sit.</h3>
              <img src={Fast} className='point-icon'/>
            </div>
            <div className='point--container'>
              <h3>Cillum irure Lorem proident irure sit incididunt qui laboris labore laboris exercitation sit reprehenderit sit.</h3>
              <img src={Fast} className='point-icon'/>
            </div>
          </div>
        </div>
      </main>
    );
  
}

export default About;