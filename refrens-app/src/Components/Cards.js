import React from "react";

function Cards({ data }) {
  // destructuring the app data recieved from api
  const { name, species, gender, image, location, origin, episode } = data;
  return (
    <div>
      {/* recieved data is being mapped into the card component as per the use cases */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container p-2 mx-auto">
          <div className="flex flex-wrap w-full">
            <div className="p-4 md:w-1/3 ">
              <div className="h-full only-of-type:p-2 border-2 w-96 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={image}
                  alt="blog"
                />
                <div className="p-1">
                  <h3 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    {species}
                  </h3>
                  <h3 className="title-font text-lg font-medium text-white mb-3">
                    {gender}
                  </h3>
                  <h1 className="tracking-widest text-xl title-font font-medium text-white mb-1">
                    {name}
                  </h1>
                  <details>
                    <summary>Channels Appeared</summary>
                    {/* displaying thr episode data which is an array */}
                    {episode.map((eps) => {
                      return (
                        <p className="m-2 cursor-pointer" key={eps.id}>
                          {eps}
                        </p>
                      );
                    })}
                  </details>

                  <div className="p-1">
                    <span className="inline-block bg-gray-200 rounded-full p-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {location.name}
                    </span>
                    <br />
                    <span className="inline-block bg-gray-200 rounded-full p-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
