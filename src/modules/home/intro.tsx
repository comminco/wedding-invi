import styled from 'styled-components'
import {
  BlueFlower,
  RedFlower,
  GreenClova,
  PinkClova,
  YellowClova,
} from '../common/star'

export function Intro() {
  return (
    <Wrap>
      <p>싱그러운 6월</p>
      <br />
      <p>이제 평생을 약속하며</p>
      <p>부부로서의 긴 여행을 떠나고자 합니다.</p>
      <br />
      <p>그 자리에</p>
      <p>지금의 저희가 있기까지</p>
      <p>사랑과 관심으로 보살펴주신 분들을 </p>
      <p>모시고 싶습니다.</p>
      <br />
      <p>귀한 걸음 하시어 축하해주시면</p>
      <p>더 없는 기쁨으로 간직하겠습니다.</p>
      <GreenClova />
      <p>이동진·김경화 의 아들 이경민 </p>
      <p>빈수용·최미경 의 딸 빈다은 </p>
      <GreenClova />
      <p>2023년 6월 17일</p>
      <p>토요일 오후 1시</p>
      <p>용산 가족 공원 야외예식장</p>
    </Wrap>
  )
}

const Wrap = styled.section`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  margin-top: 500px;

  justify-content: center;
  align-items: center;
`

const Sticky = styled.div`
  position: sticky;
  top: 4px;
`
