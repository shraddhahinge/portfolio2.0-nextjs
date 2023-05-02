import React from "react";
import { motion } from "framer-motion";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-0 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media.licdn.com/dms/image/C4E03AQEoBiPMFEfAWg/profile-displayphoto-shrink_400_400/0/1599117308205?e=1688601600&v=beta&t=Ja2q6ggPAIrJpS52wSTRIXbo2Z0RHGV6r5cVQXvK3G8"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of PAPAFAM</h4>
        <p className="text-2xl font-bold mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
            alt="skill_logo"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
            alt="skill_logo"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
            alt="skill_logo"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
            alt="skill_logo"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started Work....</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            {" "}
            Summary Points Summary Points Summary Points Summary Points v
          </li>
          <li>
            {" "}
            Summary Points Summary Points Summary Points Summary Points v
          </li>
          <li>
            {" "}
            Summary Points Summary Points Summary Points Summary Points v
          </li>
          <li>
            {" "}
            Summary Points Summary Points Summary Points Summary Points v
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
