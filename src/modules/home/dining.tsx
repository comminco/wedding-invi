import styled from 'styled-components'
import mapImg from '@/assets/images/map.png'

export function Dining() {
  return (
    <Wrap>
      <Title>식사 안내</Title>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <p>서울 용산구 서빙고로 137</p>
        <p>경천사탑 두레</p>
      </div>

      <Traffic>국립 중앙 박물관 내부에 있습니다.</Traffic>
      <div
        style={{
          width: '100%',
        }}
      >
        <MapImg src={mapImg} alt="" />
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <MapButton
          style={{ backgroundColor: 'var(--key-color-naver)' }}
          onClick={() => window.open('https://naver.me/GgeuSRwG', '_blank')}
        >
          네이버 지도
        </MapButton>
        <MapButton
          style={{ backgroundColor: 'var(--key-color-kakao)' }}
          onClick={() =>
            window.open('https://place.map.kakao.com/8471638', '_blank')
          }
        >
          카카오 지도
        </MapButton>
      </div>
      <Traffic>갈비탕 정식이 준비되어 있습니다.</Traffic>
    </Wrap>
  )
}

const Wrap = styled.section`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  border-bottom: var(--border-S);
`

const Traffic = styled.div`
  text-align: center;
  width: 100%;
  height: 1.8rem;
  max-width: 400px;
  padding-left: 5px;
  font-family: 'QuattroSans';
`

const MapImg = styled.img`
  width: 100%;

  max-width: 400px;
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
