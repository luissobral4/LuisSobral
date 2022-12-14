import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import {useState} from "react";
import {useTheme} from 'next-themes';
import {MdDarkMode, MdLightMode} from 'react-icons/md';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const {theme,setTheme} = useTheme()

  const themeToggler = () => {
    if(theme === 'light'){
      return(
        <MdDarkMode className="w-8 h-8 mx-auto text-green-900" role="button" onClick={() => setTheme('dark')}/>
      );
    } else {
      return(
        <MdLightMode className="w-8 h-8 mx-auto dark:text-white" role="button" onClick={() => setTheme('light')}/>
      );
    }
  };

  return (
    <div className="dark:bg-green-900 dark:text-white bg-white text-green-900 w-full">
      <Link href="/">
        <h2 className="text-green-900 dark:text-white cursor-pointer lg:text-6xl text-4xl pt-2 font-times font-bold text-center">
          Luís Sobral
        </h2>
      </Link>
      {themeToggler()}
      <div className="divide-d dark:text-white text-green-900 lg:text-xl text-lg place-content-center hidden md:flex my-2">
        <div className="flex-initial px-4">
          <Link href="/">
            <h2 className="cursor-pointer hover:text-green-500"> Home </h2>
          </Link>
        </div>

        <div className="flex-initial px-4">
          <Link href="/#about" scroll={false}>
            <h2 className="cursor-pointer hover:text-green-500"> About Me </h2>
          </Link>
        </div>
        <div className="flex-initial px-4">
          <Link href="/#projects">
            <h2 className="cursor-pointer hover:text-green-500"> Projects </h2>
          </Link>
        </div>
        <div className="flex-initial px-4">
          <Link href="/#more">
            <h2 className="cursor-pointer hover:text-green-500"> More </h2>
          </Link>
        </div>
      </div>


      <div className="md:hidden w-6 h-6 mx-auto my-2">
        <button className="lg:hidden dark:text-white text-green-900" onClick={handleClick}>
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

      <div className="border-b-4 dark:border-white border-green-900"/>
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full inline-flex flex-grow md:hidden `}
      >
        <div className="divide-y dark:text-white text-green-900 dark:bg-green-900 bg-gray-100 w-full h-[800px] text-center text-4xl">
          <div>
            <Link href="/">
              <button className="cursor-pointer my-4 hover:text-green-500" onClick={() => setActive(false)}>
                Home
              </button>
            </Link>
          </div>
          <div>
            <Link href="/#about" scroll={false}>
              <button className="cursor-pointer my-4 hover:text-green-500" onClick={() => setActive(false)}>
                About Me
              </button>
            </Link>
          </div>
          <div>
            <Link href="/#projects">
              <button className="cursor-pointer my-4 hover:text-green-500" onClick={() => setActive(false)}>
                Projects
              </button>
            </Link>
          </div>
          <div>
            <Link href="/#more">
              <button className="cursor-pointer my-4 hover:text-green-500" onClick={() => setActive(false)}>
                More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
