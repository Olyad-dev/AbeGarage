import React from 'react'
import Video from '../components/Video/Video'
import About from '../components/About/About'
import Service from '../components/Service/Service'
import Features from '../components/Features/Features'
import WhyChoose from '../components/WhyChoose/WhyChoose'
import Video2nd from '../components/Video/Video2nd'
import Appointment from '../components/CTA/Appointment'

export default function Home() {
  return (
    <>
      <Video />
      <About />
      <Service />
      <Features />
      <WhyChoose />
      <Video2nd />
      <Appointment />
    </>
  )
}
