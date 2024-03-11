import { Link, useLocation, useParams } from "react-router-dom";
import { IconArrowDark, IconMoon, IconSun } from "../components/Icons";
import { Button } from "react-aria-components";

type DetailProps = {
  theme: string;
  handleTheme: () => void;
};

const Detail: React.FunctionComponent<DetailProps> = ({
  theme,
  handleTheme,
}) => {
  let { state } = useLocation();

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
      {state && (
        <article
          className="bg-Background min-h-screen p-8 flex flex-col gap-12 text-Text"
          data-theme={theme}
        >
          <Link
            to={`/`}
            className="bg-Element max-w-max px-4 py-2 rounded-sm shadow-xl shadow-Black"
          >
            <span>{"<-- Back"}</span>
          </Link>

          <div className="flex flex-col gap-8">
            <img src={state.flags.png} alt="flag" />

            <div className="flex flex-col gap-2">
              <div className="pb-4 font-bold">
                <span>{state.name.common}</span>
              </div>
              <div className="">
                <span>Official Name: </span>
                <span className="opacity-60">{state.name.official}</span>
              </div>
              <div>
                <span>Population: </span>
                <span className="opacity-60">{state.population}</span>
              </div>
              <div>
                <span>Region: </span>
                <span className="opacity-60">{state.region}</span>
              </div>
              <div>
                <span>Sub Region: </span>
                <span className="opacity-60">{state.subregion}</span>
              </div>
              <div>
                <span>Capital: </span>
                <span className="opacity-60">{state.capital}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <span>Top Level Domain: </span>
                <span className="opacity-60">{state.tld}</span>
              </div>
              <div>
                <span>Currencies: </span>
                <span className="opacity-60">{state.name.common}</span>
              </div>
              <div>
                <span>Languages: </span>
                <span className="opacity-60">{state.name.common}</span>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default Detail;
