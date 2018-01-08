import React from 'react'
import styled, { keyframes } from 'styled-components'

import Header from './header'
import Text from './text'
import Image from './image'
import Code from './code'

const Attention = keyframes`
  from { background: #e8f4fb } to { background: #fff; }
`

const TweetContainer = styled.div`
  padding: 9px 12px;
  border-bottom: ${props => (props.threaded && !props.last ? 'none' : '1px solid #e6ecf0')};
  background: #fff;
  position: relative;
  animation: 1s ${Attention};
  &:hover {
    background: #f5f8fa;
    & .avatar {
      box-shadow: 0 0 0 3px #f5f8fa;
    }
  }
`

const Connector = styled.div`
  border-left: 3px solid #a3d4f2;
  position: absolute;
  left: 35px;
  height: calc(100% - 20px);
  top: 20px;
  ${props => (props.last ? 'top: 0; height: 20px' : null)};
  ${props => (props.middle ? 'top: 0; height: 100%' : null)};
  ${props => (props.folded ? 'top: 0; height: 100%; border-left-style: dashed' : null)};
  z-index: 1;
}
`

const Tweet = props => (
  <TweetContainer {...props}>
    <Header {...props} />
    {props.text ? <Text {...props} /> : null}
    {props.image ? <Image {...props} /> : null}
    {props.code ? <Code {...props} /> : null}
    {props.threaded ? <Connector {...props} /> : null}
  </TweetContainer>
)

export default Tweet
export { Connector }
