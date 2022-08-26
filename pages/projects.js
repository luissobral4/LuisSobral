import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/personalCard.js'
import Link from 'next/link';

const MENU_LIST = [
  { id:0, type: "Web Development", name:"BusPrime", description:"Platform focused in the comercialize public transport tickets", image:"/busprime.png" },
  { id:1, type:"Game",name:"Tanks",description:"Tanks 2D game", image:"/mapa2.bmp"}
];

export default function Projects() {
  const item = MENU_LIST[0];
  const item2 = MENU_LIST[1];
  return (
    <>
      <h2 className="text-black dark:text-white lg:text-6xl text-4xl mt-6 font-times font-bold text-center">
        Projects
      </h2>
      <div className="flex flex-wrap place-content-center">
          <Card id={item.id} type={item.type} name={item.name} description={item.description} image={item.image}/>
          <Card id={item2.id} type={item2.type} name={item2.name} description={item2.description} image={item2.image}/>
      </div>
    </>
  )
}
