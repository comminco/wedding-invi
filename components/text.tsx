'use client'

import { useEffect } from 'react'

export default function Text() {
  return (
    <article className="w-full h-[100vh] px-6 whitespace-pre text-white text-left">
      <div id="title" className=" text-2xl font-weight leading-9 my-6">
        2023년 6월 1일
        <br />
        저희 결혼 합니다.
      </div>
      <div id="contents" className="leading-9 text-xl font-light">
        <div className="my-5">
          오셔서 축하해줘도 좋고 멀리서
          <br />
          저희의 앞날을 기대해주시는
          <br />
          것만으로도 든든할 겁니다.
        </div>
        <div className="my-5">thank you for being with us.</div>
        <div className="my-5">
          이 청첩을 받은 여러분도
          <br />
          지금 여기서 행복하시길!
        </div>
      </div>
    </article>
  )
}
