import styled from 'styled-components'
import flower from '@/assets/images/flower.png'
import black_star from '@/assets/images/black_star.png'
import { useLocation } from 'react-router-dom'
import React from 'react'

export function Money() {
  const location = useLocation()
  const { pathname } = location

  const accountDatas = pathname.includes('bride') ? brideDatas : groomDatas
  return (
    <Wrap>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <img
          style={{
            width: '25%',
            paddingBottom: '2rem',
          }}
          src={flower}
          alt=""
        />
      </div>
      <Title>마음 전하실 곳</Title>
      <Line />
      <Account datas={accountDatas} />
      <br />
    </Wrap>
  )
}

const Account = ({ datas }: any[]) => {
  return (
    <div
      className="pretendard"
      style={{ width: '100%', lineHeight: 2, fontWeight: 400 }}
    >
      {datas.map((data, idx) => {
        return (
          <React.Fragment key={idx}>
            <div
              style={{
                width: '100%',
                margin: '1rem 0rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div>
                <img
                  style={{ paddingRight: '0.3rem', width: '0.8rem' }}
                  src={black_star}
                  alt="*"
                />
                {`${data.role} : ${data.name}`}
              </div>

              <div
                style={{ paddingLeft: '1.1rem' }}
              >{`연락처 : ${data.phone}`}</div>

              <div className="f-b-c" style={{ paddingLeft: '1.1rem' }}>
                <div dangerouslySetInnerHTML={{ __html: data.bank }}></div>
                <div style={{ position: 'relative' }}>
                  <CopyText id={`copyText-${idx}`}>복사 되었습니다.</CopyText>
                  <CopyButton
                    onClick={() => handleCopyClipBoard(data.bankAccount, idx)}
                  >
                    계좌 복사하기
                  </CopyButton>
                </div>
              </div>
            </div>

            <Line />
          </React.Fragment>
        )
      })}
    </div>
  )
}

const brideDatas = [
  {
    role: '신부',
    name: '서윤미',
    phone: '010-2667-1056',
    bank: '신한은행 110-503-685140',
    bankAccount: '110-503-685140',
  },
  {
    role: '아버님',
    name: '서혁',
    phone: '010-9156-1056',
    bank: '제일은행 579-2030-9218',
    bankAccount: '579-2030-9218',
  },
  {
    role: '어머님',
    name: '이정숙',
    phone: '010-2669-1056',
    bank: '국민은행 2702-103-29182',
    bankAccount: '2702-103-29182',
  },
]

const groomDatas = [
  {
    role: '신랑',
    name: '이재호',
    phone: '010-9940-4435',
    bank: '우리은행<br/>1002-147-945727',
    bankAccount: '1002-147-945727',
  },
  {
    role: '아버님',
    name: '이영희',
    phone: '010-2974-4435',
    bank: '국민은행<br/>505802-01-104914',
    bankAccount: '505802-01-104914',
  },
  {
    role: '어머님',
    name: '박상옥',
    phone: '010-3233-4435',
    bank: '우리은행<br/>126-097263-12-001',
    bankAccount: '126-097263-12-001',
  },
]

const handleCopyClipBoard = async (text: string, idx: number) => {
  try {
    await navigator.clipboard.writeText(text)
    const copyTextEl = document.getElementById(`copyText-${idx}`)!
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
  opacity: 0;
`

const Wrap = styled.section`
  padding: 3rem 2rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: var(--border-S);
`

const Title = styled.div`
  font-size: 1.7rem;
  margin-bottom: 2rem;
`

const Line = styled.div`
  border-bottom: var(--border-S);
  width: 100%;
  max-width: 400px;
`

const CopyButton = styled.button`
  cursor: pointer;
  font-weight: 400;
  font-size: 0.8rem;
  background-color: var(--green);
  width: 6rem;
  height: 40px;
  border: none;
  border-radius: 5px;
`
