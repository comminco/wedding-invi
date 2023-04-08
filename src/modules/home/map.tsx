import styled from 'styled-components'
import mapImg from '@/assets/images/map.png'
import hanbok from '@/assets/images/hanbok.png'
import black_star from '@/assets/images/black_star.png'

export function Map() {
  return (
    <Wrap>
      <Title>오시는 길</Title>
      <div className="pretendard" style={{ textAlign: 'center' }}>
        <p>서울시 중구 퇴계로 36길 10</p>
        <p>한국의집</p>
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
          className="pretendard"
          style={{ backgroundColor: 'var(--green)' }}
          onClick={() => window.open('https://naver.me/5KZOlrcb', '_blank')}
        >
          네이버 지도
        </MapButton>
        <MapButton
          className="pretendard"
          style={{ backgroundColor: 'var(--orange)' }}
          onClick={() =>
            window.open('https://place.map.kakao.com/13050574', '_blank')
          }
        >
          카카오 지도
        </MapButton>
      </div>
      <Line />
      <Traffic className="pretendard">
        <img
          style={{ paddingRight: '5px', width: '0.8rem' }}
          src={black_star}
          alt="*"
        />
        지하철 : 3,4호선 충무로역 하차 3번 출구
      </Traffic>
      <Line />
      <Traffic className="pretendard">
        <img
          style={{ paddingRight: '5px', width: '0.8rem' }}
          src={black_star}
          alt="*"
        />
        버스: 퇴계로 3가 한옥마을 한국의 집 하차
      </Traffic>
      <Line />
      <Traffic
        className="pretendard"
        style={{
          paddingLeft: '2.5rem',
        }}
      >
        104, 105, 140, 263, 421, 507, 604, 7011
      </Traffic>
      <Line />

      <div
        style={{
          marginTop: '5rem',
          width: '100%',
        }}
      >
        <img src={hanbok} alt="" width={'100%'} />
      </div>
    </Wrap>
  )
}

const Line = styled.div`
  border-bottom: var(--border-S);
  width: 100%;
  max-width: 400px;
`
const Traffic = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 1.8rem;
  max-width: 400px;
  padding-left: 5px;
`

const MapImg = styled.img`
  width: 100%;

  max-width: 400px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Wrap = styled.section`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
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
  font-size: 1rem;
`
