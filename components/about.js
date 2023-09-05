import Head from 'next/head'
import Image from 'next/image'


export default function AboutComp({image,description,description2,description3}) {
  return (
    <>
      <div className="flex flex-col md:flex-row mx-auto w-full text-green-900 dark:text-green-100 text-xl">
        <div className="md:mr-8 min-w-[200px] md:max-w-[500px] lg:max-w-[600px]">
          <div id="about" className="flex-row font-bold mb-8">
            <label className=""> 1.</label>
            <label className="text-black dark:text-white lg:text-4xl text-2xl"> About me</label>
            <div className="border-b-2 border-green-900 dark:border-green-100"/>
          </div>
          <p className="m-1 pr-2">
            {description}
          </p>
          <p className="m-1 pr-2">
            Here are some of the languagues I had already worked with:
          </p>

          <div className="flex flex-col sm:flex-row text-black">
            <ul class="list-disc sm:mr-16 ml-8 mb-2">
              <li>Java</li>
              <li>JavaScript</li>
              <li>Haskell</li>
              <li>C/C++</li>
              <li>Python</li>
            </ul>
          </div>
          <p className="m-1 pr-2">
            {description2}
          </p>
          <p className="m-1 pr-2">
            {description3}
          </p>
        </div>
        <div className="mx-auto mt-16 transition ease-in-out delay-150 duration-300 hover:-translate-y-6">
          <Image
            src={image}
            width={300}
            height={330}
            className="rounded-2xl opacity-75  hover:opacity-100"
          />
        </div>
      </div>
    </>
  )
}
