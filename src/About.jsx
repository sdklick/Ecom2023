import React from 'react'
import Herosection from './components/Herosection'
import { useProductContext } from './context/Productcontext'


const About = () => {

const {name}=useProductContext()

  return (
    <>
        <Herosection/>
        {name}

    </>
  )
}

export default About