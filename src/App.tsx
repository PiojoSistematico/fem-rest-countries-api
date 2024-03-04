import { useEffect, useState } from "react";
import {
  Button,
  Input,
  ListBox,
  ListBoxItem,
  Popover,
  SearchField,
  Select,
  SelectValue,
} from "react-aria-components";

import { CountryProps } from "./types";
import Card from "./components/Card";
import { IconMoon, IconSun } from "./components/Icons";

type RegionProp = "All" | "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

function App() {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState<CountryProps[]>([]);
  const [region, setRegion] = useState<RegionProp>("All");
  const [filterWord, setFilterWord] = useState("");

  function handleTheme(): void {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

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
              value={filterWord}
              onChange={(e) => setFilterWord(e.target.value)}
            ></Input>
          </SearchField>

          <Select
            selectedKey={region}
            onSelectionChange={(sel) => setRegion(sel)}
            className="bg-Element p-4 rounded-md text-text w-3/4"
          >
            <Button className="flex flex-row items-center gap-8">
              <SelectValue>Filter by Region</SelectValue>
              <span aria-hidden="true">▼</span>
            </Button>
            <Popover className="bg-red-400 p-4 rounded-md w-3/4">
              <ListBox>
                <ListBoxItem id={"Africa"}>Africa</ListBoxItem>
                <ListBoxItem id={"Americas"}>Americas</ListBoxItem>
                <ListBoxItem id={"Asia"}>Asia</ListBoxItem>
                <ListBoxItem id={"Europe"}>Europe</ListBoxItem>
                <ListBoxItem id={"Oceania"}>Oceania</ListBoxItem>
              </ListBox>
            </Popover>
          </Select>
        </div>

        <ul className="flex flex-col items-center gap-8">
          {region == "All"
            ? data
                .filter((elem) =>
                  elem.name.common
                    .toLowerCase()
                    .includes(filterWord.toLowerCase())
                )
                .map((elem, index) => <Card elem={elem} key={index}></Card>)
            : data
                .filter((elem) =>
                  elem.name.common
                    .toLowerCase()
                    .includes(filterWord.toLowerCase())
                )
                .filter((elem) => elem.region == region)
                .map((elem, index) => <Card elem={elem} key={index}></Card>)}
        </ul>
      </main>
    </>
  );
}

export default App;
