import styled from 'styled-components'
import diningMap from '@/assets/images/dining_map.jpg'

export function Dining() {
  return (
    <Wrap>
      <Title>식사 안내</Title>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <p>국립중앙박물관 1층</p>
        <p>경천사탑 두레</p>
      </div>

      <div
        style={{
          width: '100%',
        }}
      >
        <MapImg src={diningMap} alt="" />
      </div>
    </Wrap>
  )
}

const Wrap = styled.section`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`

const MapImg = styled.img`
  width: 100%;

  margin-bottom: 2rem;
  border-radius: 5px;
`

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
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
