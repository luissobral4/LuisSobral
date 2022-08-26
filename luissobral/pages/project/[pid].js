import Head from 'next/head'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai';
import PM from '../../components/projectMenu.js'
import { useRouter } from 'next/router'

const PROJECT_LIST = [
  {  name:"BusPrime",
     description:"Platform focused in the comercialize public transport tickets",
     image:"/busprime.png",
     category:"Web Development",
     languagues:"Java, HTML",
     date: "June 2022",
     technologies: "Vue.js",
     link: "https://bus-prime-frontend.vercel.app/"},

  {  name:"Tanks",
     description:"This an 2D game developed in haskell",
     image:"/mapa2.bmp",
     category:"Game",
     languagues:"Haskell",
     date: "December 2018",
     technologies: "Gloss",
     link: "https://github.com/luissobral4/Haskell-tanks-game"},
];

export default function project () {
  const router = useRouter();
  const { pid } = router.query;
  const item1 = PROJECT_LIST[pid];
    return (
      <div>
        <p className="text-green-700 dark:text-gray-300 text-base m-2 "> Project Name </p>
        <p className="text-black dark:text-white font-bold lg:text-6xl text-3xl ml-2 mb-4"> {item1.name} </p>
        <div className="flex flex-wrap place-content-center mx-4">
          <div className="mr-4">
            <PM {...item1} className="w-[500px] h-[300px] mx-auto"/>
          </div>
          <div className="">
            <Image
              src={item1.image}
              layout="fixed"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    )
}
