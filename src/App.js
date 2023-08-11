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
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", onBeforeUnload);

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
