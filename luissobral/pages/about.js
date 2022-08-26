import PersonalCard from '../components/personalCard.js'
import Link from "next/link";
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image'

function Personal() {
  return (
    <>
    <div className="w-[400px] max-w-lg text-center p-2 m-4">
      <Image
        src="/ls.png"
        layout="fixed"
        width={160}
        height={160}
      />
      <p className="text-black dark:text-white font-bold text-2xl m-1">Luís Sobral</p>
      <p className="text-green-700 dark:text-green-200 font-bold text-base">Software Engeneer</p>
      <Link href="https://github.com/luissobral4">
        <AiFillGithub className="w-6 h-6 text-black dark:text-white mx-auto cursor-pointer dark:hover:text-black hover:text-green-700 focus:ring" />
      </Link>
    </div>
    </>
  )
}

export default function About() {
  return (
    <div className="w-full h-full bg-white dark:bg-green-900">
      <h2 className="dark:text-white text-black lg:text-6xl text-4xl mt-6 font-times font-bold text-center">
        About Me
      </h2>
      <div className="flex w-full max-w-xl mx-auto flex-col lg:flex-row justify-center items-center">
        <Personal />
        <p className="text-black dark:text-white px-2">
          I am a computing science student at University of Minho specialized in distributed systems and aplications engeneering.
        </p>
      </div>
    </div>
  )
}
