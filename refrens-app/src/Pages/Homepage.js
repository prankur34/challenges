import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import { getDataFromAPI } from "../Services";
function Homepage() {
  const [apiData, setApiData] = useState();
  console.log("🚀 ~ file: Homepage.js ~ line 7 ~ Homepage ~ apiData", apiData);
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
      <div className="flex flex-wrap items-center justify-center  text-gray-400 bg-gray-500 body-font">
        {apiData &&
          apiData?.results?.map((data) => {
            return <Cards data={data} />;
          })}
      </div>
    </div>
  );
}

export default Homepage;
