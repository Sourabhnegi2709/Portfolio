import React from 'react'
import Hero from './Hero'
import Introduction from './Introduction'
import Background from './Background'
import Project from '../projects/Project'
import Contact from '../contact/Contact'
import CustomCursor from '../CostomCursor'
const HomePage = () => {
  return (
    <>
    <CustomCursor />
    <Hero/>
    <Introduction/>
    <Background/>
    <Project/>
    <Contact/>
    </>
  )
}

export default HomePage