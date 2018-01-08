import React from 'react'
import styled from 'styled-components'

const Compose = styled.div`
  background: #e8f4fb;
  height: 50px;
  @media screen and (max-device-width: 600px) {
    display: none;
  }
`

export default () => <Compose />
