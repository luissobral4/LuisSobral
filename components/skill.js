import Head from 'next/head'

export default function Skill({name,name2,description,color}) {
  return (
    <>
      <button className= {`sm:w-40 sm:h-40 w-36 h-36 m-2 p-2 text-white focus:ring-4 focus:outline-none focus:ring-gray-500 font-bold rounded-lg text-6xl text-center ${color}`}>
        {name}
        <p className="text-xl font-normal">{name2}</p>
      </button>
    </>
  )
}
