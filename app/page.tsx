'use client'

import Image from 'next/image'
import photo from '../public/images/wedding-photo.jpg'
import Text from '../components/text'
import DivideNavi from '../components/divideNavi'
import { useCallback, useEffect, useState } from 'react'

export default function home() {
  const [backgroundOpacity, setBackgroundOpacity] = useState(1)
  function handleScroll() {
    let bgOpacity = 180 / (window.scrollY + 1)
    console.log(bgOpacity)
    if (bgOpacity < 0.3) {
      bgOpacity = 0
    }

    setBackgroundOpacity(bgOpacity)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div id="view" className="h-full">
      <div id="landing" className="pt-[100vh]">
        <div className="w-full h-[100vh] fixed top-0 left-0 overflow-hidden">
          <Image
            src={photo}
            fill
            style={{
              objectFit: 'cover',
            }}
            alt="WE GET MARRY!"
          />
        </div>
      </div>
      <div
        className="fixed top-0 left-0 w-full h-full"
        style={{
          backgroundColor: `rgba(0,0,0,0.2)`,
        }}
      ></div>
      <div
        className="fixed px-12 top-8 left-0 w-full text-center text-3xl font-helvetica leading-7  font-light"
        style={{
          color: `rgba(0,0,0,${backgroundOpacity})`,
        }}
      >
        <div className="flex justify-between items-center px-11">
          <div>hey friends</div>
          <div
            className="w-9 h-[1px]"
            style={{
              backgroundColor: `rgba(0,0,0,${backgroundOpacity})`,
            }}
          ></div>
        </div>
        <div>we are getting</div>

        <div className="mt-4">married!</div>
      </div>

      <main>
        <Text />
        <DivideNavi />
      </main>
    </div>
  )
}
