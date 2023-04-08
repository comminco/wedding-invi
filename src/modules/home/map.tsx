import styled from 'styled-components'
import mapImg from '@/assets/images/map.png'
import hanbok from '@/assets/images/hanbok.png'

export function Map() {
  return (
    <Wrap>
      <Title>예식장 안내</Title>
      <div style={{ textAlign: 'center' }}>
        <p>서울 용산구 서빙고로 137</p>
        <p>용산가족공원</p>
      </div>

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

      <Traffic style={{ fontWeight: 'bold' }}>대중교통</Traffic>
      <Traffic>4호선 이촌역 하차 2번 출구</Traffic>
      <Traffic>경의중앙 서빙고역 하차 1번 출구</Traffic>
    </Wrap>
  )
}

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
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 5px;
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
