import './App.css';

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
        <h4>Solidarity in Action</h4>
        <div className='grid'>
            <p>The Diversity Working Group was founded in 2019 by Tomoko Shida, Moska Rokay, Renee Saucier, Stefanie Martin and Tam Rayan, with the hopes of evoking change and creating community at the University of Toronto's iSchool.</p>
            <p>Our group works to improve the experiences of Black, Indigenous, and Persons of Colour (BIPOC) at the University of Toronto's Faculty of Information through workshops, reading groups, special events, and advocacy work with faculty and university administration.</p>
          
           </div>
           </div>

      </section>
      </div>
    </div>
  );
}

export default App;
