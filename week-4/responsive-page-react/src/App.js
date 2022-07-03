import React, { useState, useEffect } from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <nav>
        <span>Website Logo</span>
        <Menu query="(min-width: 800px)" />
      </nav>
    </header>
  );
}

const Menu = (props) => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  function btnToggle() {
    if (isMenuOpened === true) {
      setMenuOpened(false);
    } else {
      setMenuOpened(true);
    }
  }

  useEffect(() => {
    const media = window.matchMedia(props.query);
    const listener = () => {
      if (media.matches) {
        // If media query matches
        setMenuOpened(false);
      }
    };
    window.addEventListener("resize", listener);
  }, []);

  return (
    <>
      <div id="button-container" onClick={() => btnToggle()}>
        <div className={`menu-button ${isMenuOpened === true && "hide"}`}></div>
        <div
          className={`close-button ${isMenuOpened === false && "hide"}`}
        ></div>
      </div>
      <MenuList className={isMenuOpened ? "" : "hide"} itemNos={[1, 2, 3, 4]} />
    </>
  );
};

const MenuList = (props) => {
  return (
    <ul id="menu" className={props.className}>
      {props.itemNos.map((itemNo) => (
        <li key={itemNo}>item {itemNo}</li>
      ))}
    </ul>
  );
};

function Main() {
  const [msg, setMsg] = useState("Welcome Message");
  function changeContent() {
    setMsg("Have a Good Time!");
  }
  return (
    <>
      <div id="welcome" onClick={() => changeContent()}>
        <h1>{msg}</h1>
      </div>
      <BoxSection />
    </>
  );
}

const BoxSection = () => {
  const [isActive, setActive] = useState(false);

  return (
    <div>
      <h2 id="sectionTitle">Section Title</h2>
      <Grid className="box" orders={[1, 2, 3, 4]} />
      <div id="actionBtn-container">
        <button onClick={() => setActive(true)}>Call to Action</button>
      </div>
      <Grid
        className={`box ${isActive === false && "hide"}`}
        orders={[5, 6, 7, 8]}
      />
    </div>
  );
};

const Grid = (props) => {
  return (
    <div className="gridContainer">
      {props.orders.map((order) => (
        <div className={props.className} key={order}>
          content box {order}
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
