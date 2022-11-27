import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import { getDataFromAPI } from "../Services";

function Homepage() {
  // states for storing data
  const [apiData, setApiData] = useState();
  // main api call url
  const url = "https://rickandmortyapi.com/api/character";

  // async code calling
  useEffect(() => {
    //cutsom function to call and store api response
    getDataFromAPI(url, setApiData);
  }, []);

  return (
    <div>
      <Header />
      <div className="flex w-full flex-wrap justify-center items-center text-gray-400 bg-gray-900 body-font">
        {/* api response inserting into cards through props */}
        {apiData &&
          apiData?.results?.map((data) => {
            return <Cards data={data} key={data.id} />;
          })}
      </div>
    </div>
  );
}

export default Homepage;
