import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { AiFillGithub,AiOutlineProject } from 'react-icons/ai';
import { useState } from "react";

const MENU_LIST = [
  { name:"BusPrime", description:"Platform focused in the comercialize public transport tickets.", image:"/busprime.png",
    category:"Web Development",
    languagues:"Java, HTML",
    date: "June 2022",
    technologies: "Vue.js Spring Html Java",
    git: "https://bus-prime-frontend.vercel.app/",
    link: "https://bus-prime-frontend.vercel.app/"},
  { name:"Tanks",description:"Simulation of a Tanks 2D game for 4 player max using Gloss library.", image:"/mapa2.bmp",
    category:"Game",
    languagues:"Haskell",
    date: "December 2018",
    technologies: "Gloss Ghci Haskell",
    git: "https://github.com/luissobral4/Haskell-tanks-game",
    link: "https://github.com/luissobral4/Haskell-tanks-game"}
];

export function ProjectCard({category,name,description,image,technologies,github,link}) {
  return (
    <>
      <div className="flex flex-col md:flex-row place-content-center mb-12">
        <div className="flex flex-col w-[400px] md:w-[500px] text-base md:text-xl md:m-1 mx-auto text-black dark:text-white">
          <p className="text-green-800 dark:text-green-200 font-bold">{category}</p>
          <p className="font-bold text-xl md:text-2xl">{name}</p>
          <div className="flex dark:bg-green-800 bg-green-100 md:max-w-[500px] max-w-[300px]">{description}</div>
          <p className="text-sm md:text-base">{technologies}</p>
          <Link href={github}>
            <AiFillGithub className="w-12 h-12 my-4 text-black dark:text-white cursor-pointer dark:hover:text-black hover:text-green-700" />
          </Link>
        </div>
        <div className="mx-auto md:m-1">
          <Link href= {link}>
            <Image
              src={image}
              layout="fixed"
              width={400}
              height={280}
              className="hover:opacity-50 hover:cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export function BasicCard({name,description,technologies,github}){
  return(
    <div className="m-4 bg-green-100 dark:bg-green-800 h-[250px] w-[350px] text-black dark:text-white transition ease-in-out delay-150 duration-300 hover:-translate-y-4">
      <div className="flex">
        <AiOutlineProject className="w-16 h-16 m-4 text-black dark:text-white"/>
        <Link href={github}>
          <AiFillGithub className="w-8 h-8 ml-48 mt-8 text-black dark:text-white cursor-pointer dark:hover:text-black hover:text-green-700" />
        </Link>
      </div>
      <div className="ml-6">
        <p className="font-bold text-green-800 dark:text-green-200 text-xl">{name}</p>
        <p className="w-[250px] text-base">{description}</p>
        <p className="mt-4 text-sm">{technologies}</p>
      </div>
    </div>
  )

}

export default function Projects() {
  const item = MENU_LIST[0];
  const item2 = MENU_LIST[1];
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div id="projects" className="flex-row font-bold mb-8 max-w-[600px]">
        <label className="text-green-900 dark:text-green-100 text-xl"> 2.</label>
        <label className="text-black dark:text-white text-2xl lg:text-4xl "> Some projects I've worked</label>
        <div className="border-b-2 border-green-900 dark:border-green-100"/>
      </div>
      <ProjectCard category={item.category} name={item.name} description={item.description} image={item.image} technologies={item.technologies} github={item.git} link={item.link}/>
      <ProjectCard category={item2.category} name={item2.name} description={item2.description} image={item2.image} technologies={item2.technologies} github={item2.git} link={item2.link}/>

      <div className="mt-40 text-center">
        <h1 className="font-bold text-black dark:text-white text-2xl lg:text-4xl "> Other projects </h1>
        <Link href="https://github.com/luissobral4?tab=repositories">
          <label className="text-green-900 dark:text-green-100 text-sm lg:text-base hover:underline cursor-pointer"> Check all projects here</label>
        </Link>

      </div>
      <div className="flex flex-wrap mt-12 place-content-center">
        <BasicCard name="RasBet" description="Implementation of a sports bet application." technologies="Java MySQL" github="https://github.com/luissobral4/RasBet-RAS"/>
        <BasicCard name="Bucket-Sort" description="Parallel programming in shared memory, performance of a bucket sort algorithm  ." technologies="C OpenMP" github="https://github.com/luissobral4/CP"/>
        <BasicCard name="Operating Systems" description="Control and Monitoring of communication processes" technologies="C Bash-Commands Signals" github="https://github.com/luissobral4/Operating-Systems/tree/main/SO/SO_Project"/>
        <BasicCard name="SGV" description="Implementation of a menage sales system in C and in Java" technologies="C Java" github="https://github.com/luissobral4/LI3-Project-SGV"/>
      </div>
      <div className={`${active ? '' : 'hidden'} flex flex-wrap place-content-center`}>
        <BasicCard name="Rastos" description="Implementation of the rastos Game" technologies="C" github="https://github.com/luissobral4/LI2-Rastros-2019-2020/tree/main/LI2_Project"/>
        <BasicCard name="Haskell" description="Some small haskell assignments I had resolved" technologies="Haskell" github="https://github.com/luissobral4/PF-Haskell-tasks"/>
        <BasicCard name="OTT" description="Over the Top Service for streaming delivery" technologies="Java" github="https://github.com/luissobral4/ESR"/>
      </div>
      <div className="mt-8 border-4 w-[150px] hover:bg-green-200 dark:hover:bg-green-800 mx-auto text-xl font-bold text-green-900 dark:border-white border-green-900">
        <button type="button" key="ShowM" className={`${
          active ? 'hidden' : ''
          } p-4 dark:text-gray-200`} onClick={handleClick}>
          Show More
        </button>

        <button type="button" key="ShowL" className={`${
          active ? '' : 'hidden'
          } p-4 dark:text-gray-200`} onClick={handleClick}>
          Show Less
        </button>
      </div>
    </>
  )
}
