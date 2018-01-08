import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  margin: 10px 5px 10px 55px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  max-width: calc(100% - 55px);
`
export default props => <Image src={props.image} />
