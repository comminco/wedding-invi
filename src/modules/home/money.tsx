import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

export function Money() {
  const location = useLocation()
  const { pathname } = location
  console.log(pathname)
  const accountDatas = pathname.includes('bride') ? brideDatas : groomDatas
  return (
    <Wrap>
      <Title>마음 전하실 곳</Title>
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
          <div
            key={idx}
            style={{
              width: '100%',
              margin: '1.5rem 0rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div>✤ {`${data.role} : ${data.name}`}</div>

            <div
              style={{ paddingLeft: '1rem' }}
            >{`연락처 : ${data.phone}`}</div>

            <div className="f-b-c" style={{ paddingLeft: '1rem' }}>
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
        )
      })}
    </div>
  )
}

const brideDatas = [
  {
    role: '신부',
    name: '빈다은',
    phone: '010-3900-2004',
    bank: '신한은행 110-451-165439',
    bankAccount: '110-451-165439',
  },
  {
    role: '아버님',
    name: '빈수용',
    phone: '010-2593-5689',
    bank: '--은행 0000-000-00000',
    bankAccount: '0000-000-00000',
  },
  {
    role: '어머님',
    name: '최미경',
    phone: '010-6624-2997',
    bank: '--은행 0000-000-00000',
    bankAccount: '0000-000-00000',
  },
]

const groomDatas = [
  {
    role: '신랑',
    name: '이경민',
    phone: '010-6406-8160',
    bank: '신한은행 110-369-341954',
    bankAccount: '110-369-341954',
  },
  {
    role: '아버님',
    name: '이동진',
    phone: '010-2408-8160',
    bank: '--은행 0000-000-00000',
    bankAccount: '0000-000-00000',
  },
  {
    role: '어머님',
    name: '김경화',
    phone: '010-3156-8160',
    bank: '하나은행 743-910005-70707',
    bankAccount: '743-910005-70707',
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: var(--border-S);
`

const Title = styled.div`
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
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
  height: 32px;
  border: none;
  border-radius: 5px;
`
