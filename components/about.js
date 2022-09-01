import Head from 'next/head'
import Image from 'next/image'


export default function AboutComp({image,description}) {
  return (
    <>
      <div className="flex flex-col md:flex-row mx-auto w-full text-green-900 dark:text-green-100 text-xl">
        <div className="md:mr-8 min-w-[300px]">
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

          <div className="flex flex-row">
            <ul class="list-disc mr-16 ml-8">
              <li>Java</li>
              <li>JavaScript</li>
              <li>Haskell</li>
            </ul>
            <ul class="list-disc">
              <li>C</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-16 transition ease-in-out delay-150 duration-300 hover:-translate-y-6">
          <Image
            src={image}
            layout="fixed"
            width={300}
            height={330}
            className="rounded-2xl opacity-75  hover:opacity-100"
          />
        </div>
      </div>
    </>
  )
}
