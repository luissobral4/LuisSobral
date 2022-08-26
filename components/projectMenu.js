import Image from 'next/image'
import React, { useState } from "react";
import { AiFillGithub } from 'react-icons/ai';
import Link from "next/link";

export default function ProjectMenu({name,description,image,category,languagues,date,technologies,link}) {
  const [state, setState] = useState({
    state: -1,
  });
  return(
    <>
      <div className="w-[360px] sm:w-[500px] rounded-xl mx-auto text-black place-content-center ring-black">
        <div className="">
          <button type="button" key="Description" className="w-1/2 p-4 hover:border-b-4 text-xl font-bold text-green-900 dark:text-gray-200 dark:border-white focus:border-b-4 border-green-900" onClick={() => setState(0)}>
            Description
          </button>
          <button type="button" key="Details" className="w-1/2 p-4 hover:border-b-4 text-xl font-bold text-green-900 dark:text-gray-200 dark:border-white focus:border-b-4 border-green-900" onClick={() => setState(1)}>
            Details
          </button>
        </div>

          {state === 0 && (
            <p className="p-2 dark:text-white">{description}</p>
          )}
          {state === 1 && (
            <div className="flex flex-row">
              <div className="flex flex-col w-1/2 font-bold">
                <p className="p-2 dark:text-gray-200 text-gray-700 border-b-2 dark:border-white border-green-900">Category</p>
                <p className="p-2 dark:text-gray-200 text-gray-700 border-b-2 dark:border-white border-green-900">Technologies</p>
                <p className="p-2 dark:text-gray-200 text-gray-700 border-b-2 dark:border-white border-green-900">Languagues</p>
                <p className="p-2 dark:text-gray-200 text-gray-700">Date</p>
              </div>
              <div className="flex flex-col w-1/2">
                <p className="p-2 border-b-2 dark:border-white border-green-900 dark:text-white">{category}</p>
                <p className="p-2 border-b-2 dark:border-white border-green-900 dark:text-white">{technologies}</p>
                <p className="p-2 border-b-2 dark:border-white border-green-900 dark:text-white">{languagues}</p>
                <p className="p-2 dark:text-white">{date}</p>
              </div>
            </div>
          )}
          <Link href={link}>
            <div className="flex flex-row m-2 max-w-[200px] rounded-xl bg-gray-200 w-1/3 mx-auto text-black hover:bg-gray-400 cursor-pointer">
              <AiFillGithub className="w-20 h-20 mx-auto focus:ring" />
              <p className="text-base my-auto mx-auto">Check it on GitHub</p>
            </div>
          </Link>
      </div>
    </>
  );
};
