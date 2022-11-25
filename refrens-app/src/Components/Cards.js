import React from "react";

function Cards({ data }) {
  const { name, species, gender, image, location, origin, episode } = data;
  return (
    <div className="">
      <div class="p-2">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={image} alt="Mountain" />
          <div class="p-2">
            <div class="font-bold text-xl mb-2 text-white">{name}</div>
            episode :
            <ul>
              {episode.map((eps) => {
                return (
                  <li>
                    <span class="mr-5 hover:text-gray-900 cursor-pointer">
                      {eps}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {species}
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {gender}
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              current : {location.name}
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              origin : {origin.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
