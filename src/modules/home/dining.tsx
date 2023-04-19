import styled from 'styled-components'
import diningMap from '@/assets/images/dining_map.jpg'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import gifts from '@/assets/images/gifts.png'

export function Dining() {
  const [onAddr, setOnAddr] = useState(false)
  const [addrComplete, setAddrComplete] = useState(false)
  const location = useLocation()
  const { pathname } = location

  const isPresent = pathname.includes('w')

  return (
    <Wrap>
      {isPresent ? (
        <>
          <Title>답례품 안내</Title>
          <img
            style={{
              width: '40%',
              marginBottom: 10,
            }}
            src={gifts}
            alt=""
          />
          <Text>자연 속에서 가까운 친지 분들과 </Text>
          <Text>여유로운 결혼식을 꾸리다보니,</Text>
          <Text>식사를 제공해드리기가 어렵습니다.</Text>
          <Text>양해를 부탁드립니다.</Text>
          <Text>대신 주소를 입력해 주시면 감사의 마음을 담아</Text>
          <Text>답례품을 배송해드리고자 합니다 🤍</Text>
          {addrComplete ? (
            <SuccessButton>주소 입력 완료 ✔️</SuccessButton>
          ) : (
            <>
              {onAddr ? (
                <AddrInput setAddrComplete={setAddrComplete} />
              ) : (
                <AddrButton
                  style={{ marginTop: 20 }}
                  onClick={() => setOnAddr(true)}
                >
                  답례품 받을 주소 입력하기
                </AddrButton>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <Title>식사 안내</Title>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <p>국립중앙박물관 1층 내부</p>
            <p>경천사탑 두레</p>
          </div>

          <div
            style={{
              width: '100%',
            }}
          >
            <MapImg src={diningMap} alt="" />
          </div>

          <a
            style={{}}
            href="/src/assets/images/dining_map.jpg"
            target={'_blank'}
          >
            지도 크게보기
          </a>
          <Text>식사 1부 : 11:30 ~ 13:00</Text>
          <Text>식사 2부 : 14:00 ~ 15:30</Text>
        </>
      )}
    </Wrap>
  )
}

const AddrInput = ({ setAddrComplete }) => {
  const handleFindAddr = () => {
    var element_layer = document.getElementById('layer')
    new daum.Postcode({
      oncomplete: function (data) {
        // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        var addr = '' // 주소 변수
        var extraAddr = '' // 참고항목 변수

        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') {
          // 사용자가 도로명 주소를 선택했을 경우
          addr = data.roadAddress
        } else {
          // 사용자가 지번 주소를 선택했을 경우(J)
          addr = data.jibunAddress
        }

        // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
        if (data.userSelectedType === 'R') {
          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraAddr +=
              extraAddr !== '' ? ', ' + data.buildingName : data.buildingName
          }
          // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if (extraAddr !== '') {
            extraAddr = ' (' + extraAddr + ')'
          }
          // 조합된 참고항목을 해당 필드에 넣는다.
          document.getElementById('sample2_extraAddress').value = extraAddr
        } else {
          document.getElementById('sample2_extraAddress').value = ''
        }

        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        document.getElementById('sample2_postcode').value = data.zonecode
        document.getElementById('sample2_address').value = addr
        // 커서를 상세주소 필드로 이동한다.
        document.getElementById('sample2_detailAddress').focus()

        document.getElementById('postButton').style.display = 'block'
        document.getElementById('searchBtn').style.color = 'grey'

        // iframe을 넣은 element를 안보이게 한다.
        // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
        element_layer.style.display = 'none'
      },
      width: '100%',
      height: '100%',
      maxSuggestItems: 5,
    }).embed(element_layer)

    element_layer.style.display = 'block'
    // iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.
  }

  const handleAddrPost = async () => {
    if (!document.getElementById('name').value) {
      alert('성함을 입력해 주세요!')
      return
    }
    if (!document.getElementById('sample2_detailAddress').value) {
      alert('상세 주소를 입력해 주세요!')
      return
    }
    const url = 'https://api.408.co.kr/wedding/'
    const datas = {
      name: document.getElementById('name').value,
      postCode: document.getElementById('sample2_postcode').value,
      address: document.getElementById('sample2_address').value,
      detailAddr: document.getElementById('sample2_detailAddress').value,
      etc: document.getElementById('sample2_extraAddress').value,
    }
    const res = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(datas), // body data type must match "Content-Type" header
    })

    if (res.ok) {
      setAddrComplete(true)
    }
  }

  return (
    <AddrWrap>
      <div style={{ width: '100%' }}>
        <input type="text" id="name" placeholder="성함" />
      </div>
      <input
        style={{
          marginRight: 10,
        }}
        type="text"
        id="sample2_postcode"
        placeholder="우편번호"
      />
      <AddrButton id="searchBtn" onClick={handleFindAddr}>
        주소 찾기
      </AddrButton>

      <input
        style={{
          width: '100%',
        }}
        type="text"
        id="sample2_address"
        placeholder="주소"
      />
      <input type="text" id="sample2_detailAddress" placeholder="상세주소" />
      <input type="text" id="sample2_extraAddress" placeholder="참고항목" />
      <div
        id="layer"
        style={{
          marginTop: 10,
          display: 'none',
          width: '100%',
          height: 380,
          WebkitOverflowScrolling: 'touch',
          border: '1px solid black',
        }}
      ></div>

      <AddrButton
        id="postButton"
        style={{
          display: 'none',
          margin: 'auto',
          marginTop: 10,
        }}
        onClick={handleAddrPost}
      >
        주소 전달
      </AddrButton>
    </AddrWrap>
  )
}

const AddrWrap = styled.div`
  position: relative;
  margin-top: 2rem;

  input {
    height: 25px;
    margin: 3px;
    width: calc(50% - 1.5rem);
    padding-left: 5px;
    border-radius: 5px;
    border: var(--border-S);
  }
`

const Wrap = styled.section`
  padding: 3rem 1.5rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`

const MapImg = styled.img`
  width: 100%;

  border-radius: 5px;
`

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
const Text = styled.div``

const AddrButton = styled.button`
  cursor: pointer;
  margin-top: 10px;
  background-color: #e8eaeb;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  border-radius: 10px;
  border: none;
  box-shadow: 1px 1px 1px grey;
`

const MapButton = styled.button`
  cursor: pointer;
  width: 48%;
  height: 2.5rem;
  border-radius: 10px;
  border: none;
  text-align: center;
  font-size: var(--text-M);
  font-family: 'QuattroSans';
`

const SuccessButton = styled(AddrButton)`
  cursor: default;
  padding: 0.3rem 0.8rem;
  box-shadow: none;
  span {
    color: #008000;
  }
`
