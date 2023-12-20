/*
 onChangeShowResult = () => {
    this.setState({ShowResult: true})
  }

componentDidUpdate() {
    const {Score} = this.state
    if (Score === 12) {
      return this.setState({ShowResult: true})
    }
    return this.setState(prevState => ({ShowResult: prevState.ShowResult}))
  }

 Score === 12
      ? this.setState(prevState => ({ShowResult: !prevState.showResult}))
      : this.setState(prevState => ({ShowResult: prevState.ShowResult}))
Quick Tip 
 
- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

if (Score > TopScore) {
      return this.setState({TopScore: Score})
    }

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {Score: 0, TopScore: 0, ShowResult: false, clickedEmojis: []}

  getClickedEmojis = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isClickedEmoji = clickedEmojis.includes(id)
    const clickedEmojisLength = clickedEmojis.length
    if (isClickedEmoji) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  finishGameAndSetTopScore = topScore => {
    const {clickedEmojis, Score, TopScore} = this.state
    if (topScore > TopScore) {
      this.setState({Score: topScore, TopScore: topScore})
    } else {
      this.setState({Score: topScore})
    }
  }

  onClickPlayAgain = () => {
    this.setState(prevState => ({
      Score: 0,
      TopScore: prevState.TopScore,
      ShowResult: false,
      clickedEmojis: [],
    }))
  }

  render() {
    const {Score, TopScore, ShowResult} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const shuffledEmojisList2 = shuffledEmojisList()

    return (
      <div className="bg-container1">
        <NavBar score={Score} topScore={TopScore} showResult={ShowResult} />
        {!ShowResult && (
          <ul className="emoji-cards-container">
            {shuffledEmojisList2.map(each => (
              <EmojiCard
                key={each.id}
                emojiDetails={each}
                getClickedEmojis={this.getClickedEmojis}
              />
            ))}
          </ul>
        )}
        {(ShowResult || Score === 12) && (
          <WinOrLoseCard
            score={Score}
            onClickPlayAgain={this.onClickPlayAgain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
