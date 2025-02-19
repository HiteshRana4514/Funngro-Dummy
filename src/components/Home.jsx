import React from 'react'
import Hero from './Hero'
import Ecosystem from './Ecosystem'
import About from './About'
import SharkTank from './SharkTank'
import '../assets/css/about.css'

function Home() {
  return (
    <>
        <Hero/>
        <Ecosystem/>
        <About/>
        <SharkTank/>
    </>
  )
}

export default Home