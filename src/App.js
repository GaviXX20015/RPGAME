import "./App.css";

import { Fragment, useState } from "react";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import RoadMap from "./components/RoadMap/RoadMap";
import More from "./components/LearnMore/More";
import Footer from "./components/Footer/Footer";

import Leaderboard from "./components/Leaderboard/Leaderboard";

function App() {
  const [page, SetCurrentPage] = useState("Home");

  const OnChangePageHandler = (page) => {
    SetCurrentPage(page);
    console.log(page);
  };

  return (
    <div className="App">
      {page == "Home" ? (
        <Fragment>
          <Header OnChangePageHandler={OnChangePageHandler} />
          <About />
          <RoadMap />
          <More />
          <Footer />
        </Fragment>
      ) : (
        <Leaderboard OnChangePageHandler={OnChangePageHandler} />
      )}
    </div>
  );
}

export default App;
