import React from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-jsx'

const Code = styled.pre`
  background: #f9f9f9;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 10px 5px 10px 55px;
  max-width: calc(100% - 55px);
  font-size: 13px;
`

export default props => (
  <Code
    dangerouslySetInnerHTML={{
      __html: Prism.highlight(props.code, Prism.languages[props.language || 'javascript'])
    }}
  />
)
