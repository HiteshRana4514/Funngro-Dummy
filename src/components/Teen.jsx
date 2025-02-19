import React from 'react'
import '../assets/css/teenStyle.css'
import TeenHero from './TeenHero'
import Statistics from './Statistics'
import Features from './Features'
import ProjectCategories from './ProjectCategories'
import TrustedCompany from './TrustedCompany'
import Earning from './Earning'
import FAQ from './FAQ'

function Teen() {
  return (
    <>
        <TeenHero/>
        <Statistics/>
        <Features/>
        <ProjectCategories/>
        <TrustedCompany/>
        <Earning/>
        <FAQ/>
    </>
  )
}

export default Teen