import Head from 'next/head'

export default function Skill({name,name2,description,color}) {
  return (
    <>
      <button className= {`w-40 h-40 m-2 p-2 text-white focus:ring-4 focus:outline-none focus:ring-gray-500 font-bold rounded-lg text-6xl text-center ${color}`}>
        {name}
        <p className="text-xl font-normal">{name2}</p>
      </button>
    </>
  )
}
