import styled from 'styled-components'
import { Star } from '../common/star'

export function Intro() {
  return (
    <Wrap>
      <p>지난 시간동안 서로의 인생에서</p>
      <p>기쁨과 위로가 되었던 둘은</p>
      <br />
      <p>이제는 평생을 약속하며</p>
      <p>저희다운 모습으로 함께</p>
      <p>긴 여행을 시작하려 합니다.</p>
      <br />
      <p>지금의 저희가 있기까지</p>
      <p>사랑과 관심으로 보살펴주신 분들을 </p>
      <p>모시고 싶습니다.</p>
      <Star />
      <p>이동진·김경화 의 아들 이경민 </p>
      <p>빈수용·최미경 의 딸 빈다은 </p>
      <Star />
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
