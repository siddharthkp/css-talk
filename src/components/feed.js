import React from 'react'
import styled from 'styled-components'

import tweets from './tweets'
import Compose from './compose'
import Tweet, { Connector } from './tweet/'

const Feed = styled.div`
  width: 700px;
  margin: 0 auto;
  padding-top: 55px;
  transition: all 0.5s;

  span.mobile {
    display: none;
  }
  span.desktop {
    display: inline-block;
  }

  @media screen and (max-device-width: 600px) {
    width: 100%;

    span.mobile {
      display: inline-block;
    }
    span.desktop {
      display: none;
    }
  }
`

const NewTweets = styled.div`
  background-color: #f5f8fa;
  border: 1px solid #e6ecf0;
  color: ${props => (props.count ? '#1b95e0' : '#e6ecf0')};
  height: ${props => (props.count ? '42px' : 0)};
  overflow: hidden;
  line-height: 42px;
  cursor: pointer;
  text-align: center;
  border-width: ${props => (props.count ? '1px' : 0)} 0;
  transition: height 0.5s;
  &:hover {
    background-color: #e6ecf0;
    border: 1px solid #ccd6dd;
  }
`

const Folded = styled.div`
  color: #1b95e0;
  position: relative;
  padding: 10px 5px 10px 70px;
  background: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

class Thread extends React.Component {
  constructor() {
    super()
    this.state = { open: false }
  }
  open() {
    this.setState({ open: true })
  }
  render() {
    const thread = this.props.thread
    const first = thread[0]
    const last = thread.length > 1 ? thread[thread.length - 1] : null

    return (
      <div>
        {first ? <Tweet {...first} threaded={thread.length > 1} /> : null}
        {!this.state.open && thread.length > 2 ? (
          <Folded onClick={this.open.bind(this)}>
            <Connector folded={true} />
            {thread.length - 2} more {thread.length > 3 ? 'replies' : 'reply'}
          </Folded>
        ) : (
          thread.slice(1, -1).map((tweet, index) => <Tweet {...tweet} key={index} threaded={true} middle={true} />)
        )}
        {last ? <Tweet last={true} {...last} threaded={true} /> : null}
      </div>
    )
  }
}

export default class extends React.Component {
  constructor() {
    super()
    this.state = { index: 0, new: 0, threads: [[tweets[0]]] }
  }
  componentDidMount() {
    window.onkeypress = e => this.continue()
    setTimeout(_ => this.setState({ new: 1 }), 2000)
    // debug
    // for (let i = 0; i < tweets.length - 1; i++) this.continue()
  }
  showNewTweets() {
    this.continue()
    this.setState({ new: 0 })
    if (tweets[this.state.index + 2]) setTimeout(_ => this.setState({ new: 1 }), 1000)
  }
  continue() {
    this.setState(initialState => {
      const nextTweet = tweets[initialState.index + 1]
      if (!nextTweet) return initialState

      const threads = initialState.threads
      if (!nextTweet.reply) threads.unshift([nextTweet])
      else threads[0].push(nextTweet)
      return { index: initialState.index + 1, threads }
    })
  }
  render() {
    return (
      <Feed id="chat">
        <Compose />
        <NewTweets onClick={this.showNewTweets.bind(this)} count={this.state.new}>
          See {this.state.new} new Tweet
        </NewTweets>
        {this.state.threads.map((thread, index) => {
          const key = (thread[0] && thread[0].text) || index
          return <Thread key={key} thread={thread} />
        })}
      </Feed>
    )
  }
}
