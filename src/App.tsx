import { useEffect, useState } from "react";
import iconMoon from "./assets/images/icon-moon.svg";
import iconSun from "./assets/images/icon-sun.svg";
import { Button, TextField } from "react-aria-components";

import { CountryProps } from "./types";
import Card from "./components/Card";

function App() {
  const [theme, setTheme] = useState(0);
  const [data, setData] = useState<CountryProps[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  console.log(data);

  return (
    <>
      <header>
        <span></span>
        <Button>
          <img src={iconMoon} alt="icon Moon" />
          <span>Dark Mode</span>
        </Button>
      </header>
      <main>
        <TextField></TextField>
        <ul>
          {data.map((elem, index) => (
            <Card elem={elem} key={index}></Card>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
