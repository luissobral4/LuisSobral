import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/personalCard.js'
import Link from 'next/link';

const MENU_LIST = [
  { name:"BusPrime", description:"Platform focused in the comercialize public transport tickets", image:"/busprime.png",
    category:"Web Development",
    languagues:"Java, HTML",
    date: "June 2022",
    technologies: "Vue.js",
    link: "https://bus-prime-frontend.vercel.app/"},
  { name:"Tanks",description:"Tanks 2D game", image:"/mapa2.bmp",
    category:"Game",
    languagues:"Haskell",
    date: "December 2018",
    technologies: "Gloss",
    link: "https://github.com/luissobral4/Haskell-tanks-game"}
];


export function getAllPostIds() {
  return(
    [
      {params: {pid: '0'}},
      {params: {pid: '1'}}
    ]
  )
}

export function getPostData(pid) {
  const item = MENU_LIST[pid];
  return {
    pid,
    ...item,
  };
}


export default function Projects() {
  const item = MENU_LIST[0];
  const item2 = MENU_LIST[1];
  return (
    <>
      <h2 className="text-black dark:text-white lg:text-6xl text-4xl mt-6 font-times font-bold text-center">
        Projects
      </h2>
      <div className="flex flex-wrap place-content-center">
          <Card id={"0"} category={item.category} name={item.name} description={item.description} image={item.image}/>
          <Card id={"1"} category={item2.category} name={item2.name} description={item2.description} image={item2.image}/>
      </div>
    </>
  )
}
