import Image from 'next/image'
const Background = () => (
  <div className="dark:bg-[url('../public/lsdark.jpeg')] bg-[url('../public/lslight.jpeg')] bg-cover min-h-[500px] md:min-h-[800px]">
    <div className="pl-8 pt-24 pb-16 text-4xl  sm:text-6xl lg:text-8xl">
      <h1 className="text-green-900 dark:text-green-200 text-xl lg:text-2xl font-bold pb-4">
        Hi, my name is
      </h1>
      <h1 className="text-black dark:text-white font-bold">
        Luís Sobral,
      </h1>
      <h1 className="text-gray-800 dark:text-gray-400 font-bold pb-8">
        Computer Science
      </h1>
      <h1 className="text-gray-900 dark:text-gray-200 text-xl lg:text-2xl max-w-[300px] sm:max-w-[500px]">
        I'm a computer science student at University of Minho, specialized in application engeneering.
      </h1>
    </div>

  </div>
)

export default Background
