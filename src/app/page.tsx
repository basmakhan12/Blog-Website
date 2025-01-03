import React from 'react'
import Header from './components/Header'
import AuthorCard from './components/AuthorCard'
import Mega from './components/Mega'
import Feature from './components/Feature'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Header/>
      <Feature/>
      <Mega/>
      <AuthorCard/>
       <Footer/>
      
    </div>
  )
}

export default page
