import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { BlueFlower, RedFlower, GreenClova } from '../common/star'
import { useState, useEffect, useRef } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export function Money() {
  return (
    <Wrap>
      <Title>마음 전하실 곳</Title>
      <GreenClova />
      <Toggle type={'groom'} datas={groomDatas} title={'신랑측 계좌번호'} />
      <Toggle type={'bride'} datas={brideDatas} title={'신부측 계좌번호'} />
      <br />
    </Wrap>
  )
}

const Toggle = ({ datas, title, type }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div style={{ margin: '0.5rem 0rem' }}>
      <AccountBtn onClick={() => setIsActive(!isActive)}>
        {title}
        <Arrow isActive={isActive} />
      </AccountBtn>
      <div
        className="expandable"
        id={isActive ? 'active' : ''}
        style={{ width: '100%', lineHeight: 1.8 }}
      >
        {datas.map((data, idx) => {
          return (
            <div
              key={idx}
              style={{
                width: '100%',
                margin: '1.5rem 0rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div>{`${data.name}`}</div>
              <div className="f-b-c">
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.9rem',
                      marginRight: '5px',
                    }}
                  >
                    {data.bank}
                  </div>

                  <div style={{ fontSize: '1rem' }}>{data.bankAccount}</div>
                </div>
                <div style={{ position: 'relative' }}>
                  <CopyText id={`copyText-${idx}-${type}`}>복사 완료!</CopyText>
                  <CopyToClipboard
                    onCopy={() => {
                      handleCopyClipBoard(idx, type)
                    }}
                    text={data.bankAccount}
                  >
                    <CopyButton>복사하기</CopyButton>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Arrow = ({ isActive }) => {
  return (
    <svg
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ width: '1.5rem', transform: isActive ? 'rotate(0.5turn)' : '' }}
    >
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </svg>
  )
}
const brideDatas = [
  {
    role: '신부',
    name: '빈다은',
    bank: '토스뱅크',
    bankAccount: '1000-1021-0969',
  },
  {
    role: '아버님',
    name: '빈수용',
    bank: '카카오뱅크',
    bankAccount: '3333-01-6458488',
  },
  {
    role: '어머님',
    name: '최미경',
    bank: '카카오뱅크',
    bankAccount: '3333-05-1653524',
  },
]

const groomDatas = [
  {
    role: '신랑',
    name: '이경민',
    phone: '010-6406-8160',
    bank: '신한은행',
    bankAccount: '110-369-341954',
  },
  {
    role: '아버님',
    name: '이동진',
    phone: '010-2408-8160',
    bank: '농협은행',
    bankAccount: '302-0660-0620-91',
  },
  {
    role: '어머님',
    name: '김경화',
    phone: '010-3156-8160',
    bank: '하나은행',
    bankAccount: '743-910005-70707',
  },
]

const handleCopyClipBoard = async (idx: number, type: string) => {
  try {
    const copyTextEl = document.getElementById(`copyText-${idx}-${type}`)!
    copyTextEl.style.animation = 'appearNdisappear linear 0.7s 1 forwards'
    setTimeout(() => {
      copyTextEl.style.animation = 'none'
    }, 1000)
  } catch (e) {
    alert('복사에 실패하였습니다')
  }
}

const CopyText = styled.p`
  font-size: 0.6rem;
  position: absolute;
  top: -19px;
  left: 1.2rem;
  opacity: 0;
`

const Wrap = styled.section`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: var(--border-S);
`

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`

const AccountBtn = styled.button`
  width: 100%;
  background-color: #008000;
  height: 3rem;
  border: none;
  border-radius: 5px;
  font-size: var(--text-M);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  cursor: pointer;
`

const CopyButton = styled.button`
  cursor: pointer;
  font-weight: 400;
  font-size: 0.8rem;
  background-color: rgb(191, 225, 192);
  padding: 0.5rem 1rem;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
`
