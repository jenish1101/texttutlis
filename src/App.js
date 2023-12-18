import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const togglechange = () => {
    if (mode == "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      document.title = "Texttulis - Dark Mode";

      showalert(":Dark mode is enable", "success");
      setTimeout(() => {
        showalert(null);
      }, 1500);
    } 
    else 
    {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Texttulis - Light Mode";

      showalert(":Light mode is enable", "success");
      setTimeout(() => {
        showalert(null);
      }, 1500);
    }
  };

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="Texttutlis" mode={mode} togglechange={togglechange} />
        <Alert alert={alert} />
        <Textform mode={mode} showalert={showalert} />
        {/* <Routes> */}
          {/* <Route path="/About" element={<About />}></Route> */}
          {/* <Route path="/Textform" element={<Textform mode={mode} showalert={showalert} />}> */}
          {/* </Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
