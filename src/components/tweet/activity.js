import React from 'react'
import styled from 'styled-components'

const Activity = styled.div`
  font-size: 12px;
  color: #657786;
  i {
    position: relative;
    top: -2px;
    font-size: 10px;
  }
`

export default props => (
  <Activity>
    <i className="fa fa-heart" aria-hidden="true" />
    {props.liker} liked
  </Activity>
)
