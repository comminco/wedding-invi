import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'

export function Info() {
  const stickyRef = useRef(null)

  useEffect(() => {
    const el = stickyRef.current

    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio === 0 && window.scrollY > 0) {
          el.innerHTML = '23/06/17(토) 오후 1시 용산가족공원 야외예식장'
        } else {
          el.innerHTML = null
        }
      },
      { threshold: [1] }
    )

    observer.observe(el)
  }, [])

  return <Sticky ref={stickyRef}> </Sticky>
}

const Sticky = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  text-align: center;

  font-size: 12px;
`
