import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  font-size: 14px;
  vertical-align: baseline;
`
const Avatar = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  float: left;
  margin-right: 10px;
  position: relative;
  box-shadow: 0 0 0 3px #fff;
  z-index: 2;
`

const Name = styled.span`
  color: #14171a;
  font-weight: bold;
`

const Handle = styled.a`
  color: #657786;
  margin-left: 5px;
  text-decoration: none;
`

const Time = styled.span`
  color: #657786;
  &:before {
    content: '\00b7';
    padding: 0 5px;
  }
`

export default props => (
  <Header>
    <Avatar className="avatar" src={props.avatar} />
    <Name>{props.user}</Name>
    {props.handle ? (
      <Handle href={'https://twitter.com/' + props.handle} target="_blank">
        {props.handle}
      </Handle>
    ) : null}
    {props.time ? <Time>{props.time}</Time> : null}
  </Header>
)
