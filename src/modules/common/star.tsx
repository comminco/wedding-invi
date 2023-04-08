import yellow_star from '@/assets/images/yellow_star.png'
import blue_star from '@/assets/images/blue_star.png'
import black_star from '@/assets/images/black_star.png'

interface StarProps {
  color: 'black' | 'blue' | 'yellow'
  padding?: string
}

const starByColor = {
  yellow: yellow_star,
  black: black_star,
  blue: blue_star,
}

export function Star() {
  return (
    <div
      style={{
        padding: '1.3rem',
        fontSize: '1rem',
      }}
    >
      ✤
    </div>
  )
}
