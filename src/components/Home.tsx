import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  SearchField,
  Select,
  SelectValue,
} from "react-aria-components";

import { CountryProps } from "../types";
import Card from "../components/Card";
import { IconMoon, IconSun } from "../components/Icons";
import { Link } from "react-router-dom";

type RegionProp = "All" | "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

type HomeProps = {
  theme: string;
  handleTheme: () => void;
};

const Home: React.FunctionComponent<HomeProps> = ({ theme, handleTheme }) => {
  const [data, setData] = useState<CountryProps[]>([]);
  const [region, setRegion] = useState<RegionProp>("All");
  const [filterWord, setFilterWord] = useState("");

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
        className="bg-Background text-base text-Text font-NunitoSans font-normal p-8 flex flex-col gap-8 min-h-screen"
      >
        <div className="flex flex-col gap-8 text-Text md:flex-row md:justify-between">
          <SearchField className="bg-Element p-4 rounded-md flex flex-row items-center gap-2 text-Input md:basis-2/3">
            <Button></Button>
            <Input
              className="w-full bg-Element"
              placeholder="Search for a country...."
              value={filterWord}
              onChange={(e) => setFilterWord(e.target.value)}
            ></Input>
          </SearchField>

          <Select
            selectedKey={region}
            onSelectionChange={(sel) => setRegion(sel)}
            className="bg-Element p-4 rounded-md text-text w-3/4 md:basis-1/3 md:w-1/4"
          >
            <Label>Filter by Region</Label>
            <Button className="flex flex-row items-center gap-8 justify-between w-full">
              <SelectValue />
              <span aria-hidden="true">▼</span>
            </Button>
            <Popover
              className={`-translate-x-4 translate-y-4 p-4 rounded-md w-3/4 z-10 ${theme == "dark" ? "bg-[#2b3945] text-[#ffffff]" : "bg-[#ffffff] text-[#121517]"}`}
            >
              <ListBox className="bg-Element flex flex-col gap-2 w-3/4">
                <ListBoxItem id={"Africa"}>Africa</ListBoxItem>
                <ListBoxItem id={"Americas"}>Americas</ListBoxItem>
                <ListBoxItem id={"Asia"}>Asia</ListBoxItem>
                <ListBoxItem id={"Europe"}>Europe</ListBoxItem>
                <ListBoxItem id={"Oceania"}>Oceania</ListBoxItem>
              </ListBox>
            </Popover>
          </Select>
        </div>

        <ul className="flex flex-col gap-8 w-full md:grid md:grid-cols-3 md:auto-rows-fr lg:grid-cols-4">
          {region == "All"
            ? data
                .filter((elem) =>
                  elem.name.common
                    .toLowerCase()
                    .includes(filterWord.toLowerCase())
                )
                .map((elem, index) => (
                  <li key={index}>
                    <Link
                      to={`/${elem.name.common.toLocaleLowerCase().replace(/\s/g, "")}`}
                      state={elem}
                    >
                      <Card elem={elem}></Card>
                    </Link>
                  </li>
                ))
            : data
                .filter((elem) =>
                  elem.name.common
                    .toLowerCase()
                    .includes(filterWord.toLowerCase())
                )
                .filter((elem) => elem.region == region)
                .map((elem, index) => (
                  <li key={index}>
                    <Link
                      to={`/${elem.name.common.toLocaleLowerCase().replace(/\s/g, "")}`}
                      state={elem}
                    >
                      <Card elem={elem}></Card>
                    </Link>
                  </li>
                ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
