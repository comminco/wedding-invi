import styled from 'styled-components'
import mapImg from '@/assets/images/map.png'
import naverMapIcon from '@/assets/images/naver_map_icon.png'
import kakaoMapIcon from '@/assets/images/kakao_map_icon.png'

export function Map() {
  return (
    <Wrap>
      <Title>예식장 안내</Title>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <p>서울 용산구 용산동6가 93-6</p>
        <p>용산가족공원 야외예식장</p>
      </div>

      <div
        style={{
          width: '100%',
        }}
      >
        <MapImg src={mapImg} alt="" />
      </div>
      <div
        className="f-b-c"
        style={{
          width: '100%',
          marginBottom: '2rem',
        }}
      >
        <MapButton
          onClick={() => window.open('https://naver.me/GgeuSRwG', '_blank')}
        >
          <img src={naverMapIcon} alt="" />
          네이버 지도
        </MapButton>
        <MapButton
          onClick={() =>
            window.open('https://place.map.kakao.com/8471638', '_blank')
          }
        >
          <img src={kakaoMapIcon} alt="" />
          카카오 맵
        </MapButton>
      </div>

      <Traffic className="title">주차안내</Traffic>
      <Traffic>국립중앙박물관 지하주차장에 주차 하신 후</Traffic>
      <Traffic>이정표 따라 예식장으로 오시면 됩니다(도보6분)</Traffic>
      <Traffic>※ 유료 2시간 2000원</Traffic>
      <br />
      <Traffic className="title">대중교통</Traffic>
      <Traffic style={{ whiteSpace: 'pre' }}>
        이촌역 4호선/경의중앙선 2번 출구 도보10분
      </Traffic>
      <Traffic>서빙고역 경의중앙 1번 출구 도보10분</Traffic>
      <Traffic>
        버스 400번, 502번 국립중앙박물관 용산가족공원 정류장 하차 도보 약 7분
        소요
      </Traffic>
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

const Traffic = styled.div`
  width: 100%;
  max-width: 400px;
  padding-left: 7px;
  min-height: 2rem;

  &.title {
    padding-left: 0px;
    font-size: 1.1rem;
  }
`

const MapImg = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
`

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const MapButton = styled.button`
  background: transparent;
  cursor: pointer;
  width: 48%;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-S);
  font-family: 'AppleMyungjo';
  margin-top: 10px;

  img {
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }
`
