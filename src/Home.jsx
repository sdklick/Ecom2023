import React from 'react'
import Herosection from './components/Herosection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import Featureproduct from './Featureproduct'

const Home = () => {
  return (
    <>
        <Herosection/>
        <Featureproduct/>
        <Services/>
        <Trusted/>
    </>
  )
}

export default Home