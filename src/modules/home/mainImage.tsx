import styled from 'styled-components'

import bubu from '@/assets/images/bubu.jpg'
export function MainImage() {
  return (
    <Wrap>
      <Bubu src={bubu} />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 500px;
  border-top: var(--border-S);
`
const Bubu = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`
