// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, showResult} = props

  return (
    <div className="navbar-container">
      <div className="emoji-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo-img"
        />
        <h1 className="emoji-game">Emoji Game</h1>
      </div>
      {showResult ? (
        ''
      ) : (
        <div className="scores-container">
          <p className="">Score: {score}</p>
          <p className="">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
