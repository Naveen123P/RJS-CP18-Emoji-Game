// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score} = props
  const resultsText = score === 13 ? 'You Won' : 'You Lose'
  const resultImage =
    score === 13
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="results-container2">
      <div className="score-container">
        <h1>{resultsText}</h1>
        <p>Score</p>
        <h1 className="final-score">{score}/12</h1>
        <div>
          <button type="button" className="play-again-button">
            Play Again
          </button>
        </div>
      </div>
      <img src={resultImage} alt="..." className="result-image" />
    </div>
  )
}

export default WinOrLoseCard
