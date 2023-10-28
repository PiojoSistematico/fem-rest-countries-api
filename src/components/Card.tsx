import { CountryProps } from "../types";

type CardProps = {
  elem: CountryProps;
};

const Card: React.FunctionComponent<CardProps> = ({ elem }) => {
  return (
    <article>
      <img src={elem.flags.png} alt="flag" />
      <h3>{elem.name.common}</h3>
      <div>
        <span>Population: </span>
        <span>{elem.population}</span>
      </div>
      <div>
        <span>Region: </span>
        <span>{elem.region}</span>
      </div>
      <div>
        <span>Capital: </span>
        <span>{elem.capital}</span>
      </div>
    </article>
  );
};

export default Card;
