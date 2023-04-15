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
  max-width: 480px;
  height: 500px;
  border-top: var(--border-S);
  position: fixed;
  top: 0;
  z-index: -1;
`
const Bubu = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`
