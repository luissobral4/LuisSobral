import Skill from '../components/skill.js'

export default function About() {
  return (
    <div className="px-16">
      <h2 className="text-black dark:text-white lg:text-6xl text-4xl my-6 font-times font-bold text-center">
        Skills
      </h2>
      <div className="divide-x">
        <Skill name="Hs" name2="Haskell" description="Great level working with haskell" color=" bg-blue-700 dark:bg-blue-300 hover:bg-blue-500 dark:hover:bg-blue-500"/>
        <Skill name="Jv" name2="Java" description="Great level working with Java" color=" bg-blue-700 dark:bg-blue-300 hover:bg-blue-500 dark:hover:bg-blue-500"/>
        <Skill name="Py" name2="Python" description="Great level working with Python" color=" bg-blue-700 dark:bg-blue-300 hover:bg-blue-500 dark:hover:bg-blue-500"/>
        <Skill name="C" name2="C" description="Great level working with C" color=" bg-blue-700 dark:bg-blue-300 hover:bg-blue-500 dark:hover:bg-blue-500"/>
      </div>
      <div className="divide-x">
        <Skill name="JS" name2="Java Script" description="Some experience working with java script" color=" bg-red-700 dark:bg-red-300 hover:bg-red-500 dark:hover:bg-red-500"/>
        <Skill name="GL" name2="Gloss" description="Made a project with this Haskell Language Graphics in 2D" color=" bg-red-700 dark:bg-red-300 hover:bg-red-500 dark:hover:bg-red-500"/>
        <Skill name="Re" name2="React" description="Developed this web site using NextJs" color=" bg-red-700 dark:bg-red-300 hover:bg-red-500 dark:hover:bg-red-500"/>
      </div>
      <div className="divide-x">
        <Skill name="SQL" name2="MySQL" description="Experience working with mySQL in multiple projects" color=" bg-green-700 dark:bg-green-300 hover:bg-green-500 dark:hover:bg-green-500"/>
      </div>
    </div>
  )
}
