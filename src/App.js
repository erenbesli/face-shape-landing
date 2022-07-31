/** @format */

// imports
import React from "react";

// styles
import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import OurSolution from "./components/OurSolution/OurSolution";
import Scan from "./components/Scan/Scan";
import Result from "./components/Result/Result";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Celebrity from "./components/Celebrity/Celebrity";
import Footer from "./components/Footer/Footer";

function App() {
  // refs
  const heroRef = React.useRef(null);
  const solutionRef = React.useRef(null);
  const celebrityRef = React.useRef(null);

  // scroll func
  const executeHeroScroll = () => heroRef.current.scrollIntoView();
  const executeSolutionScroll = () => solutionRef.current.scrollIntoView();
  const executeCelebrityScroll = () => celebrityRef.current.scrollIntoView();

  return (
    <div className='App'>
      <Navbar
        executeHeroScroll={executeHeroScroll}
        executeSolutionScroll={executeSolutionScroll}
        executeCelebrityScroll={executeCelebrityScroll}
      />
      <Hero heroRef={heroRef} />
      <OurSolution solutionRef={solutionRef} />
      <Scan />
      <Result />
      <DownloadApp />
      <Celebrity celebrityRef={celebrityRef} />
      <Footer />
    </div>
  );
}

export default App;
