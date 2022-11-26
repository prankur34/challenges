import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import { getDataFromAPI } from "../Services";
function Homepage() {
  const [apiData, setApiData] = useState();
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    getDataFromAPI(url, setApiData);
  }, []);

  // Each profile should include:
  // The character’s picture done
  // The character’s information (name, species, gender, etc.)
  // Origin and current location (name, dimension, amount of residents, etc.) -> important
  // Name of the chapters the character is featured in -> important

  return (
    <div>
      <Header />
      <div className="flex w-full flex-wrap justify-center items-center text-gray-400 bg-gray-900 body-font">
        {apiData &&
          apiData?.results?.map((data) => {
            return <Cards data={data} key={data.id} />;
          })}
      </div>
    </div>
  );
}

export default Homepage;
