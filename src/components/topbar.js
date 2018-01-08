import React from 'react'
import styled from 'styled-components'

const Topbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  background: #f9f9f9;
  z-index: 3;

  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  img {
    height: 35px;
    padding: 5px;
  }
`

export default () => (
  <div>
    <Topbar>
      <img src="twitter.png" />
    </Topbar>
  </div>
)
