import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState,useEffect } from "react";
import {useTheme} from 'next-themes';
import {MdDarkMode, MdLightMode} from 'react-icons/ai';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const {systemTheme,theme,setTheme} = useTheme();
  const [mounted,setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  },[]);

  const themeToggler = () => {
    if(!mounted) return null;

    const currTheme = theme === 'system' ? systemTheme : theme;

    if(currTheme === 'dark'){
      return(
        <MdLightMode className="w-7 h-7" role="button" onClick={() => setTheme('light')}/>
      );
    } else {
      return(
        <MdDarkMode className="w-7 h-7" role="button" onClick={() => setTheme('dark')}/>
      );
    }
  };
  return (
    <div className="dark:bg-green-200 bg-white">
      <div className="flex">
        <Link href="/">
          <h2 className="text-green-900 cursor-pointer lg:text-6xl text-4xl mt-2 font-times font-bold text-center">
            Luís Sobral
          </h2>
        </Link>
      {themeToggler()}
      </div>

      <div className="divide-d text-green-900 lg:text-xl text-lg place-content-center hidden md:flex my-2">
        <div className="flex-initial px-4">
          <Link href="/">
            <h2 className="cursor-pointer hover:text-green-500"> Home </h2>
          </Link>
        </div>

        <div className="flex-initial px-4">
          <Link href="/projects">
            <h2 class="cursor-pointer hover:text-green-500"> Projects </h2>
          </Link>
        </div>
        <div className="flex-initial px-4">
          <Link href="/skills">
            <h2 class="cursor-pointer hover:text-green-500"> Skills </h2>
          </Link>
        </div>
        <div className="flex-initial px-4">
          <Link href="/about">
            <h2 className="cursor-pointer hover:text-green-500"> About </h2>
          </Link>
        </div>
      </div>


      <div className="md:hidden w-6 h-6 mx-auto my-2">
        <button className="lg:hidden text-green-900" onClick={handleClick}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      <div className="border-b-4 border-green-900"/>
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full inline-flex flex-grow md:hidden `}
      >
        <div className="divide-y text-green-900 bg-gray-200 w-full h-[800px] text-center text-4xl">
          <div>
            <Link href="/">
              <button className="cursor-pointer my-4 hover:text-green-500" onClick={() => setActive(false)}>
                Home
              </button>
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <button className="cursor-pointer my-4 hover:text-green-500" onClick={() => setActive(false)}>
                Projects
              </button>
            </Link>
          </div>
          <div>
            <Link href="/skills">
              <button className="cursor-pointer my-4 hover:text-green-500" onClick={() => setActive(false)}>
                Skills
              </button>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <button className="cursor-pointer my-4 hover:text-green-500" onClick={() => setActive(false)}>
                About
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
