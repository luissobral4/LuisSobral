import Head from 'next/head'
import Home from '../components/home.js'
import About from '../components/about.js'
import Projects from '../components/projects.js'
import GetTouch from '../components/getintouch.js'

export default function Index() {
  return (
    <div className="w-full dark:bg-green-900 bg-white">
      <Home/>
      <div className="mx-1 sm:mx-8 mt-80 md:mx-16 lg:mx-48">
        <About
          image="/ls.jpg"
          description="Hi! My name is Luís, I am now on my the last year in Computer Science Master Course in University of Minho and computer science is something I enjoy to study since the first day I started. I am specialized in distributed systems and aplications engeneering."
          description2="I am looking forward to keep growing professionaly and personaly. In 2021 I spended some time solving haskell tasks on a Platform called Fiverr and learned to deal with client requests in a given delivery time. This year I joined a Just a Change International Camp In in Obidos, for 14 days I had been with other portuguese and International volunteers restoring houses in inhuman conditions and it was a really great experience that contributed to my personal growth."
          description3="For the future I expect to face challenging experiences, keep working and knowing different people and improve my Computer Science skills. "
        />
      </div>
      <div className="mx-1 sm:mx-8 mt-80 md:mx-16 lg:mx-48">
        <Projects/>
      </div>
      <div className="mx-1 sm:mx-8 mt-80 md:mx-16 lg:mx-48">
        <GetTouch description="I hope you enjoyed meeting my website! I will keep working in more projects, for more content visit my github." link="https://github.com/luissobral4"/>
      </div>
    </div>
  )
}
