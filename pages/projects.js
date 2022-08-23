import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/personalCard.js'
import Link from 'next/link';

const MENU_LIST = [
  { id:0, type: "Web Development", name:"BusPrime", description:"Platform focused in the comercialize public transport tickets", image:"../busprime.png" },
  { id:1, type:"Game",name:"Tanks",description:"Tanks 2D game", image:"../mapa2.bmp"}
];

export default function Projects() {
  return (
    <>
      <h2 className="text-black dark:text-white lg:text-6xl text-4xl mt-6 font-times font-bold text-center">
        Projects
      </h2>
      <div className="flex flex-wrap place-content-center">
        {MENU_LIST.map(({id,type,name,description,image}) => (
            <Card id={id} type={type} name={name} description={description} image={image}/>
        ))}
      </div>
    </>
  )
}
