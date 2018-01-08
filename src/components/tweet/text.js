import React from 'react'
import styled from 'styled-components'

const decorate = text => {
  text = text.replace('@|', '<span class="user">@')
  text = text.replace('|@', '</span>')
  return text
}

const Text = styled.div`
  font-size: 14px;
  line-height: 20px;

  line-height: 22px;

  margin: 5px 5px 10px 55px;
  max-width: calc(100% - 55px);

  .user {
    color: #1b95e0;
  }
`
export default props => <Text dangerouslySetInnerHTML={{ __html: decorate(props.text) }} />
