import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Detail from "./components/Detail";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  function handleTheme(): void {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} handleTheme={handleTheme} />}
        ></Route>
        <Route
          path="/:country"
          element={<Detail theme={theme} handleTheme={handleTheme} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
