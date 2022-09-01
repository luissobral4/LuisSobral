import Head from 'next/head'
import Home from '../components/home.js'
import About from '../components/about.js'
import Projects from '../components/projects.js'
import GetTouch from '../components/getintouch.js'

export default function Index() {
  return (
    <>
      <Home/>
      <div className="mx-1 sm:mx-8 mt-80 md:mx-16 lg:mx-48">
        <About
          image="/ls.jpg"
          description="Hi! My name is Luís and computer science is something I enjoy to study since the first day I started. I am a computing science student at University of Minho specialized in distributed systems and aplications engeneering."
        />
      </div>
      <div className="mx-1 sm:mx-8 mt-80 md:mx-16 lg:mx-48">
        <Projects/>
      </div>
      <div className="mx-1 sm:mx-8 mt-80 md:mx-16 lg:mx-48">
        <GetTouch description="I hope you enjoyed meeting my website! I will keep working in more projects, for more content visit my github." link="https://github.com/luissobral4"/>
      </div>
    </>
  )
}
