import React from 'react';
import './App.css';
import menuTop from './images/menu-top.png';
import ironhackLogo from './images/ironhack-logo.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={ironhackLogo} alt="Ironhack logo" />
          <img src= {menuTop} alt="Menu top" />
        </nav>
        
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use <br />
          the most popular frontend library, <br />
          and become a super Ninja developer. <br />
        </p>

        <button>Awesome !</button>
      </header>

      <main>
        <article>
          <img src={icon1} alt="Icon 1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </article>

        <article>
          <img src={icon2} alt="Icon 2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </article>

        <article>
          <img src={icon3} alt="Icon 3" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </article>

        <article>
        <img src={icon4} alt="Icon 4" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
        </article>
      </main>
    </div>
  );
}

export default App;