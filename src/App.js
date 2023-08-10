import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import ResponsiveGrid from "./components/ResponsiveGrid";
import React, { Fragment, useEffect } from "react";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const searchHandler = (searchVal) => {
    setSearchTerm(searchVal);
    console.log(searchVal);
  };

  useEffect(() => {
    const onBeforeUnload = () => {
      // Set the scroll position to the top when the component is unmounted (e.g., when the page is reloaded)
      window.scrollTo(0, 0);
    };

    // Attach the event listener
    window.addEventListener("beforeunload", onBeforeUnload);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, []);

  return (
    <Fragment>
      <ButtonAppBar searchHandleFun={searchHandler} />
      <ResponsiveGrid searchTerm={searchTerm} />
    </Fragment>
  );
}

export default App;
