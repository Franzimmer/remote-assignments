import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <nav>
        <span>Website Logo</span>
        <Menu 
          query="(min-width: 800px)"
        />
      </nav>  
    </header>
  );
}

const Menu = (props) => {
  const [isMenuOpened, setMenuOpened] = React.useState(false);

  function btnToggle() {
    if (isMenuOpened === true) {
      setMenuOpened(false);
    } else {
      setMenuOpened(true);
    }
  }

  React.useEffect(() => {
    const media = window.matchMedia(props.query);
    const listener = () => {
      if (media.matches) { // If media query matches
        setMenuOpened(false);
      }
    };
    window.addEventListener('resize',listener);
  });
  
  return (
    <div>
      <div id="button-container" onClick={() => btnToggle()}>
        <div className={`menu-button ${isMenuOpened===true && "hide"}`}></div>
        <div className={`close-button ${isMenuOpened===false && "hide"}`}></div>
      </div>
      <MenuList 
        className = {isMenuOpened ? "" : "hide"}
      />
    </div>
    
  );
}

const MenuList = (props) => {
  return (
    <ul id="menu" className={props.className}>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
    </ul>
  );
}

function Main() {
  return (
    <div>
      <h1 id="welcome">Welcome Message</h1>
      <BoxSection />
    </div>
  );
}

const BoxSection = () => {
  const [isActive, setActive] = React.useState(false);
  
  return (
    <div>
      <h2 id="sectionTitle">Section Title</h2>
      <Grid 
        className="box"
        order={[1,2,3,4]}
      />
      <div id="actionBtn-container">
        <button onClick={() => setActive(true)}>Call to Action</button>
      </div>
      <Grid 
        className={`box ${isActive === false && "hide"}`}
        order={[5,6,7,8]}
      />
    </div>
  );
}

const Grid = (props) => {
  return (
    <div className="gridContainer">
      <div className={props.className}>content box {props.order[0]}</div>
      <div className={props.className}>content box {props.order[1]}</div>
      <div className={props.className}>content box {props.order[2]}</div>
      <div className={props.className}>content box {props.order[3]}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
