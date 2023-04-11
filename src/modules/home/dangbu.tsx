import styled from 'styled-components'
import { Star } from '../common/star'

export function Dangbu() {
  return (
    <Wrap>
      <Star />
      <Text>
        6월의 야외 예식이라 많이 더울 수 있습니다. 빛을 가릴 수 있는 양산과
        시원한 음료가 제공될 예정이나, 미리 양해의 말씀을 드립니다.
      </Text>
      <Text>
        용산가족공원은 가족들이나 강아지가 함께 즐기기에도 좋은 공간입니다. 함께
        하고 싶은 식구가 있다면 편히 데려오시고 마음껏 즐겨주세요!
      </Text>
    </Wrap>
  )
}

const Wrap = styled.section`
  padding: 0rem 1.5rem;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: -5rem;
`

const Text = styled.div`
  width: 100%;
  max-width: 400px;
  padding-left: 7px;
  min-height: 2rem;
  padding: 10px 0;
`
