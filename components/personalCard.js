import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';


export default function Card({id,type,name,description,image}) {
  return (
    <>
      <Link href= {`/project/${id}`}>
        <div className="w-[400px] max-w-lg text-center p-2 m-6 bg-gray-100 hover:bg-gray-300 rounded-lg">
          <img className="w-60 h-40 mx-auto" src={image} alt="">
          </img>
          <p className="text-green-800 font-bold text-base m-1">{type}</p>
          <p className="text-black font-bold text-xl">{name}</p>
          <p className="text-black text-base">{description}</p>
        </div>
      </Link>
    </>
  )
}
