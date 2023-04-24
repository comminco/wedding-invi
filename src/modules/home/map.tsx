import styled from 'styled-components'
import mapImg from '@/assets/images/map.png'
import mapWImg from '@/assets/images/map_w.png'
import diningMap from '@/assets/images/dining_map.jpg'
import { useLocation } from 'react-router-dom'

import naverMapIcon from '@/assets/images/naver_map_icon.png'
import kakaoMapIcon from '@/assets/images/kakao_map_icon.png'

export function Map() {
  const location = useLocation()
  const { pathname } = location

  const isPresent = pathname.includes('w')
  return (
    <Wrap>
      <Title>오시는 길</Title>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <p>서울 용산구 용산동6가 93-6</p>
        <p>용산가족공원 야외예식장</p>
      </div>

      <div
        style={{
          width: '100%',
        }}
      >
        <MapImg src={isPresent ? mapWImg : mapImg} alt="" />
      </div>
      <div
        className="f-b-c"
        style={{
          width: '100%',
          marginBottom: '4rem',
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
      {/* 클로바 */}

      {/* 설명 */}
      <Traffic className="title">주차안내</Traffic>
      <Traffic>국립중앙박물관 지하주차장에 주차 하신 후</Traffic>
      <Traffic>이정표 따라 예식장으로 오시면 됩니다.</Traffic>
      <Traffic>(도보 6분)</Traffic>
      <Traffic style={{ fontSize: '0.9rem' }}>
        ※ 주차 요금: 2시간 2000원
      </Traffic>
      <br />
      <Traffic className="title">대중교통</Traffic>
      <Traffic style={{ whiteSpace: 'pre' }}>
        <span>◦</span> 이촌역 4호선/경의중앙선 2번 출구 도보10분
      </Traffic>
      <Traffic>
        <span>◦</span> 서빙고역 경의중앙 1번 출구 도보10분
      </Traffic>
      <Traffic>
        <span>◦</span> 버스 400번, 502번 국립중앙박물관 용산가족공원 정류장 하차
        도보 약 7분 소요
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

  border-bottom: var(--border-S);
`

const Traffic = styled.div`
  width: 100%;
  max-width: 400px;
  min-height: 2rem;

  &.title {
    padding-left: 0px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  span {
    font-size: 0.5rem;
    line-height: 3;
    vertical-align: middle;
  }
`

const MapImg = styled.img`
  width: 100%;
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
