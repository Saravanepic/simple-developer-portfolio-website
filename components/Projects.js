import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.projectscontent.title}

            <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
          <span className="bg-red-500 rounded-md px-2 py-1 text-white">
            They always say time⏲ changes things, 
          </span>{" "}
             so do my 🕸site's.
             <br/><br/>
            Do ping me if you are interested in any particular project discussion.
          </p>
           
           <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
          Thanks to clients for still running them.
          </p> 
            

          </p>
        </div>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">

      <div className="max-w-6xl mx-auto pt-10">
        <div className="leading-loose text-2xl md:text-4xl font-semibold">
          <span className="bg-red-500 rounded-md px-2 py-1 text-white">
          WordPress Projects
          </span>
          </div>
      </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10 pb-40">
          {userData.projects_wordpress.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              type={proj.type}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title,type, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl" target="__blank">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>


        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute top-10 right-10 text-gray-50 font-bold text-xl bg-[#10b981] rounded-md px-2">
          {type}
        </h1>

        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
