import Head from 'next/head'
import 'flowbite';

export default function Skill({name,name2,description,color}) {
  return (
    <>
      <button data-tooltip-target="tooltip-bottom"
              data-tooltip-placement="bottom"
              type="button" className= {`w-40 h-40 m-2 p-2 text-white focus:ring-4 focus:outline-none focus:ring-gray-500 font-bold rounded-lg text-6xl text-center ${color}`}>
              {name}
              <p className="text-xl font-normal">{name2}</p>
      </button>
      <div id="tooltip-bottom" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        {description}
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  )
}
