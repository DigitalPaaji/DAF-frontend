"use client"
import React from 'react'
import {  useSelector } from 'react-redux'
import GetCartLocal from './GetCartLocal '
import GetCartItem from './GetCartItem'

const page = () => {
const {isUser} = useSelector(state=>state.user)



  return (
    <div className='min-h-screen pt-16'>
        {/* <div className="h-14 bg-gradient-to-r from-[#210102] via-[#62080d] to-[#210102] sm:h-16" /> */}
        
     {isUser ? <GetCartItem /> : <GetCartLocal /> }


     
        </div>
  )
}



export default page





