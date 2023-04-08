import styled from 'styled-components'
import blue_star from '@/assets/images/blue_star.png'

export function Order() {
  return (
    <Wrap>
      <Title>식순</Title>
      <p>저희의 결혼식은 전통 혼례로 진행됩니다.</p>
      <p>각 절차마다 양 집안과 부부의 복을 기원하는</p>
      <p>의미를 담고 있습니다. </p>
      <p>따스한 봄 햇살과 함께 식을 즐겨주세요</p>
      <br />
      <br />
      <Line />
      <p
        style={{
          padding: '0.7rem 0rem',
          fontWeight: 400,
          fontSize: '1.1rem',
          fontStyle: 'normal',
        }}
        className="pretendard"
      >
        흥을 돋우는 혼례 전 사물놀이
      </p>
      <Line />
      <PlayGame>
        <BlueStarText text={'친영례'} />
        <p>신붓집에 온 신랑을 맞이하는 예</p>
        <div
          className="pretendard"
          style={{
            marginTop: '1rem',
            fontSize: '1rem',
            whiteSpace: 'pre',
            lineHeight: 1.7,
          }}
        >
          <p>신랑이 기럭아비의 인도로 신붓집으로 입장합니다.</p>
          <p>신부댁에서 신랑을 인사와 함께 맞이합니다.</p>
        </div>
      </PlayGame>
      <Line />
      <PlayGame>
        <BlueStarText text={'전안례'} />
        <p>기러기를 올리는 예</p>
        <div
          className="pretendard"
          style={{
            marginTop: '1rem',
            fontSize: '1rem',
            whiteSpace: 'pre',
            lineHeight: 1.7,
          }}
        >
          <p>신랑이 기러기를 신부댁에 전달하면서 혼인에 대한</p>
          <p>승낙을 구하는 의례입니다. 한 번 짝을 맺으면 다시는</p>
          <p>새로 짝을 짓지 않는 기러기처럼 백년해로하겠다는</p>
          <p>의미가 담겨있습니다.</p>
        </div>
      </PlayGame>
      <Line />
      <PlayGame>
        <BlueStarText text={'교배례'} />
        <p>신랑 신부가 절을 주고받는 예</p>
        <div
          className="pretendard"
          style={{
            marginTop: '1rem',
            fontSize: '1rem',
            whiteSpace: 'pre',
            lineHeight: 1.7,
          }}
        >
          <p>신랑 신부가 처음으로 인사를 나누기 전 마음을</p>
          <p>정갈히 한다는 의미로 손을 씻습니다.</p>
          <p>큰절하면서 서로 배우자로서 공경하고 백년해로를</p>
          <p>서약합니다.</p>
        </div>
      </PlayGame>
      <Line />
      <PlayGame>
        <BlueStarText text={'합근례'} />
        <p>신랑 신부가 혼인 서약을 하는 예</p>
        <div
          className="pretendard"
          style={{
            marginTop: '1rem',
            fontSize: '1rem',
            whiteSpace: 'pre',
            lineHeight: 1.7,
          }}
        >
          <p>혼례가 성립되었음을 알리며 신부와 신랑이</p>
          <p>양가 부모님을 비롯한 내빈에게 큰절을 올립니다.</p>
        </div>
      </PlayGame>
      <Line />
      <p
        style={{
          padding: '0.7rem 0rem',
          fontWeight: 400,
          fontSize: '1.1rem',
          fontStyle: 'normal',
        }}
        className="pretendard"
      >
        함께 즐기는 혼례 후 축가
      </p>
      <Line />
    </Wrap>
  )
}

function BlueStarText({ text }: { text: string }) {
  return (
    <div
      className="f-c-c pretendard"
      style={{
        width: '100%',
        maxWidth: '400px',
        fontWeight: '500',
        color: '#18BEE8',
        fontSize: '1.1rem',
        paddingBottom: '10px',
      }}
    >
      <img
        style={{
          paddingRight: '12px',
          width: '1.1rem',
          height: '1.1rem',
          paddingTop: 1,
        }}
        src={blue_star}
        alt="*"
      />
      {text}
      <img
        style={{
          paddingLeft: '12px',
          width: '1.1rem',
          height: '1.1rem',
          paddingTop: 1,
        }}
        src={blue_star}
        alt="*"
      />
    </div>
  )
}

const Wrap = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const Line = styled.div`
  border-bottom: var(--border-S);
  width: 100%;
  max-width: 400px;
`

const PlayGame = styled.article`
  font-size: 1.1rem;
  padding: 2.2rem 0rem;
  text-align: center;
`
