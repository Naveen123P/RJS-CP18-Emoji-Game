/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {Score: 0, TopScore: 0}

  render() {
    const {Score, TopScore} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const shuffledEmojisList2 = shuffledEmojisList()

    return (
      <div className="bg-container1">
        <NavBar score={Score} topScore={TopScore} />
        <ul className="emoji-cards-container">
          {shuffledEmojisList2.map(each => (
            <EmojiCard key={each.id} emojiDetails={each} />
          ))}
        </ul>
        <div className="result-container">
          <WinOrLoseCard score={Score} />
        </div>
      </div>
    )
  }
}

export default EmojiGame
