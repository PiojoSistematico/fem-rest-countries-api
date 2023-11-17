import { useEffect, useState } from "react";
import iconMoon from "./assets/images/icon-moon.svg";
import iconSun from "./assets/images/icon-sun.svg";
import {
  Button,
  Input,
  Item,
  ListBox,
  Popover,
  SearchField,
  Select,
  SelectValue,
  TextField,
} from "react-aria-components";

import { CountryProps } from "./types";
import Card from "./components/Card";
import { IconMoon, IconSun } from "./components/Icons";

function App() {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState<CountryProps[]>([]);

  function handleTheme(): void {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  console.log(data);

  return (
    <>
      <header
        data-theme={theme}
        className="bg-Element text-base text-Text font-NunitoSans font-normal flex flex-row items-center justify-between p-8"
      >
        <p className="font-bold">Where in the world?</p>
        <Button
          onPress={handleTheme}
          className="flex flex-row items-center gap-2 text-Text"
        >
          <picture>
            {theme == "light" ? <IconMoon></IconMoon> : <IconSun></IconSun>}
          </picture>
          <p>{theme == "light" ? "Dark Mode" : "Light Mode"}</p>
        </Button>
      </header>
      <main
        data-theme={theme}
        className="bg-Background text-base text-Text font-NunitoSans font-normal p-8 flex flex-col gap-8"
      >
        <div className="flex flex-col gap-8">
          <SearchField className="bg-Element p-4 rounded-md flex flex-row items-center gap-2 text-Input">
            <Button>
              <IconMoon></IconMoon>
            </Button>
            <Input
              className="w-full"
              placeholder="Search for a country...."
            ></Input>
          </SearchField>

          <Select className="bg-Element p-4 rounded-md text-text w-max">
            <Button className="flex flex-row items-center gap-8">
              <SelectValue>Filter by Region</SelectValue>
              <span aria-hidden="true">▼</span>
            </Button>
            <Popover className="bg-red-400 p-4 rounded-md">
              <ListBox>
                <Item>Africa</Item>
                <Item>America</Item>
                <Item>Asia</Item>
                <Item>Europe</Item>
                <Item>Oceania</Item>
              </ListBox>
            </Popover>
          </Select>
        </div>

        <ul className="flex flex-col items-center gap-8">
          {data.map((elem, index) => (
            <Card elem={elem} key={index}></Card>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
