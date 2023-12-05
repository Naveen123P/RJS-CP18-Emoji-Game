// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, topScore, onClickPlayAgain} = props
  const resultsText = score === 13 ? 'You Won' : 'You Lose'
  const resultImage =
    score === 13
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const clickOnPlayAgain = () => {
    onClickPlayAgain()
  }

  return (
    <div className="result-container">
      <div className="results-container2">
        <div className="score-container">
          <h1>{resultsText}</h1>
          <p>{topScore > score ? 'Best Score' : 'Score'}</p>
          <h1 className="final-score">{score}/12</h1>
          <div>
            <button
              type="button"
              className="play-again-button"
              onClick={clickOnPlayAgain}
            >
              Play Again
            </button>
          </div>
        </div>
        <div>
          <img src={resultImage} alt="..." className="result-image" />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
