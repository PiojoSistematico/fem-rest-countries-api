import { CountryProps } from "../types";

type CardProps = {
  elem: CountryProps;
};

const Card: React.FunctionComponent<CardProps> = ({ elem }) => {
  return (
    <article className="rounded-md overflow-hidden md:basis-1/4 shadow-lg">
      <picture className="">
        <img
          src={elem.flags.png}
          alt="flag"
          className="object-fill w-full h-48"
        />
      </picture>
      <div className="bg-Element p-8 flex flex-col gap-4">
        <h3 className="font-bold text-lg">{elem.name.common}</h3>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-2">
            <span className="font-bold">Population: </span>
            <span>{elem.population}</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className="font-bold">Region: </span>
            <span>{elem.region}</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className="font-bold">Capital: </span>
            <span>{elem.capital}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
