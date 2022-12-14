import './App.css';
import FeatherIcon from 'feather-icons-react';

function App() {
  return (
    <div className="App">
      <div className='full-body'>
      <div className='logo-top'>
        <img src="/Logo.svg" alt=""/>
      </div>
        <img className='circle' src="/circle.svg" alt="" />
      <div className='quote'>
        <h2>Diversity Working Group</h2>
        <h1>An individual has not started living until he can rise above the narrow confines of his individualistic concerns to the broader concerns of all humanity.</h1>
            <h2>- Martin Luther King, Jr</h2>

      </div>

      <section className='about-us'>
        
          <img className='about-graphic' src="/about.svg" alt="" />

        <div className='about-info'>
        <h3>About Us</h3>
            <h4>Move In Formation 🐝</h4>
        <div className='grid'>
            <p>The Diversity Working Group works to improve the experiences of Black, Indigenous, and Persons of Colour (BIPOC) at the University of Toronto's Faculty of Information through workshops, reading groups, special events, and advocacy work with faculty and university administration.</p>

          
           </div>
           </div>

      </section>


      <section className='mission'>
          <h3>Our Mission Statement</h3>
          <h4>Fight The Power</h4>

            <div className='grid-3'> 

            <div>
              <img src="/representation.svg" alt="" />
              <p><b>Representation</b></p>
              <p>Concerns expressed by BIPOC students have often fallen on deaf ears at the Faculty of Information. As indicated in our 2020 Report on DEI at the iSchool, the faculty has a history of ignoring the needs of racialized students. Our group aims to give a voice for those at the margins through direct advocacy.</p>
            </div>
            <div>
              <img src="/recognition.svg" alt="" />
              <p><b>Recognition</b></p>
              <p>
                We aim to help all students feel recognized and “at home” at the iSchool. Through things like the development of educational resources and hosting culturally specific events, we hope to foster a space where BIPOC iSchool students feel safe, supported, and  empowered.</p></div>
            <div>
              <img src="/redistribution.svg" alt="" />
              <p><b>Redistribution</b></p>
              <p>
                A major barrier that emerging BIPOC information professionals face is the lack of resources and support available. We want to help alleviate this by doing what we can to open up access to resources and opportunities for racialized students. Mentorship is one of our major focus areas in this domain.</p></div>

            </div>
      </section>

        <section className='mission'>
          <h3>Our Current Initiatives</h3>
          <h4>This Is How We Do It</h4>
          <div className='grid-3'>
            <div>
              <img src="/yellow.svg" alt="" />
              <p><b>Documenting Student Voice</b></p>
              <p>Our goal is to identify the extent to which iSchool instructors include BIPOC scholars and practitioners in their course reading material</p>
            </div>
            <div>
              <img src="/pink.svg" alt="" />
              <p><b>DWG Radical Little Library</b></p>
              <p>
                In 2019-2020, the DWG held two  successful discussions on readings that pertain to race & racism within the information professions. </p></div>
            <div>
              <img src="/blue.svg" alt="" />
              <p><b>Youth Outreach and Mentorship</b></p>
              <p>
                In 2019, the DWG began to develop a BIPOC reading list that would provide alternative readings to the ones available through course syllabi. </p></div>

          </div>
        </section>

        <section className='footer'>
          <div className='bottom-cta' style={{backgroundImage: "url('/bottom.svg')"}}>
            <h1>Sound Interesting?</h1>
            <h2>Come Join us</h2>

            <a href="/" className='button' type="button" target="_blank">Join us</a>

          </div>
          <footer>
            <div className='content'>
              <div className='name'>
                <img src="/line-logo.svg" alt="" />
                <h3>Diversity working group</h3>
              </div>
              <div>
                <a href='/' className='social'>
                  <FeatherIcon icon="twitter" size="40" />
                </a>
                <a href='/' className='social'>
                  <FeatherIcon icon="facebook" size="40" />
                </a>
                <a href='/' className='social'>
                  <FeatherIcon icon="instagram" size="40" />
                </a>
                <a href='/' className='social'>
                  <FeatherIcon icon="mail" size="40" />
                </a>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default App;
