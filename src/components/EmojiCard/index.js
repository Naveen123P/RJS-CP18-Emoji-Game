// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, getClickedEmojis} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const clickOnEmoji = () => {
    getClickedEmojis(id)
  }

  return (
    <li className="emoji-container">
      <button className="emoji-button" type="button" onClick={clickOnEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
