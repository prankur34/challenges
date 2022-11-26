import React from "react";

function Cards({ data }) {
  const { name, species, gender, image, location, origin, episode } = data;
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container p-2 mx-auto">
          <div class="flex flex-wrap w-full">
            <div class="p-4 md:w-1/3 ">
              <div class="h-full only-of-type:p-2 border-2 w-96 border-gray-800 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={image}
                  alt="blog"
                />
                <div class="p-1">
                  <h3 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    {species}
                  </h3>
                  <h3 class="title-font text-lg font-medium text-white mb-3">
                    {gender}
                  </h3>
                  <h1 class="tracking-widest text-xl title-font font-medium text-white mb-1">
                    {name}
                  </h1>
                  <details>
                    <summary>Channels Appeared</summary>

                    {episode.map((eps) => {
                      return <p className="m-2 cursor-pointer">{eps}</p>;
                    })}
                  </details>

                  <div class="p-1">
                    <span class="inline-block bg-gray-200 rounded-full p-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {location.name}
                    </span>
                    <br />
                    <span class="inline-block bg-gray-200 rounded-full p-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {origin.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
