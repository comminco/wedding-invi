import React from 'react'
import styled from 'styled-components'

interface ViewContainerProps {
  children: React.ReactNode
}

function ViewContainer({ children }: ViewContainerProps) {
  return (
    <Container>
      <Wrap>{children}</Wrap>
    </Container>
  )
}

const Container = styled.div`
  margin: auto;
  width: 100%;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`

const Wrap = styled.main`
  margin: auto;
  width: 100%;
  max-width: 480px;
`

export default ViewContainer
