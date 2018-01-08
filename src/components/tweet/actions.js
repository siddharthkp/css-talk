import React from 'react'
import styled from 'styled-components'

const Actions = styled.div`
  height: 20px;
`

const Retweet = styled.span`
  color: ${props => (props.active ? '#17bf63' : '#657786')};
  &:hover {
    color: #17bf63;
  }
`

const Heart = styled.span`
  color: ${props => (props.active ? '#e0245e' : '#657786')};
  &:hover {
    &:hover {
      color: #e0245e;
    }
  }
`

export default () => (
  <Actions>
    <Retweet>
      <i className="fa fa-retweet" aria-hidden="true" />
    </Retweet>
    <Heart>
      <i className="fa fa-heart-o" aria-hidden="true" />
    </Heart>
  </Actions>
)
