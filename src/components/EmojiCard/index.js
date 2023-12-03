// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails} = props
  const {emojiUrl} = emojiDetails

  return (
    <li className="emoji-container">
      <button className="emoji-button" type="button">
        <img src={emojiUrl} alt="emoji" className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
