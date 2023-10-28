import { CountryProps } from "../types";

import { Button } from "react-aria-components";

type CardProps = {
  elem: CountryProps;
};

const Detail: React.FunctionComponent<CardProps> = ({ elem }) => {
  return (
    <article>
      <Button>Back</Button>
      <img src={elem.flags.png} alt="flag" />
      <div>
        <span>Native Name: </span>
        <span>{elem.name.nativeName}</span>
      </div>
      <div>
        <span>Population: </span>
        <span>{elem.population}</span>
      </div>
      <div>
        <span>Region: </span>
        <span>{elem.region}</span>
      </div>
      <div>
        <span>Sub Region: </span>
        <span>{elem.subregion}</span>
      </div>
      <div>
        <span>Capital: </span>
        <span>{elem.capital}</span>
      </div>
      <div>
        <span>Top Level Domain: </span>
        <span>{elem.tld}</span>
      </div>
      <div>
        <span>Currencies: </span>
        <span>{elem.name.common}</span>
      </div>
      <div>
        <span>Languages: </span>
        <span>{elem.name.common}</span>
      </div>

      <div>
        <span>Border countries: </span>
        <span>{elem.borders}</span>
      </div>
    </article>
  );
};

export default Detail;
