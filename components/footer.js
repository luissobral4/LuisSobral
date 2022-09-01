import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <div className="bg-white dark:bg-green-900 place-content-center py-8 text-center flex h-full">
        <Link href="https://github.com/luissobral4">
          <AiFillGithub className="w-6 h-6 mr-2 text-black dark:text-white cursor-pointer dark:hover:text-black hover:text-green-700" />
        </Link>
        <p className="text-sm dark:text-white text-gray-600">
          Luís Sobral | developed in NextJs
        </p>
      </div>
    </>
  )
}
