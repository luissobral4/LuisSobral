import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

export default function CheckMore({description,link}) {
  return (
    <>
      <h1 id="more"className="text-green-900 dark:text-green-100 text-sm lg:text-base text-center"> 3. Get in touch</h1>
      <h1 className="text-black font-bold dark:text-white lg:text-4xl text-2xl text-center"> Check Out More</h1>
      <p className="text-black dark:text-white mx-auto max-w-[300px] sm:max-w-[400px] mt-4 pr-2">
        {description}
      </p>
      <Link href={link}>
        <div className="max-w-[150px] mt-8 mb-80 rounded-xl mx-auto border-2 border-green-900 dark:border-green-100 cursor-pointer hover:bg-green-100 dark:hover:bg-green-800">
          <p className="p-2 text-black dark:text-white text-center">Check Out More</p>
        </div>
      </Link>
    </>
  )
}
