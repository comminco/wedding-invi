import styled from 'styled-components'
import { onDialog as onDialigRecoil } from '@/atoms/dialog'
import { useRecoilState } from 'recoil'

export function Modal() {
  const [onDialog, setOnDialog] = useRecoilState(onDialigRecoil)

  if (!onDialog) {
    return null
  }

  return (
    <Wrap className="f-c-c">
      <Box></Box>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`

const Box = styled.div`
  max-width: 400px;
  width: 90%;
  height: 90%;
  max-height: 600;
  background-color: white;
  border-radius: 10px;
`
