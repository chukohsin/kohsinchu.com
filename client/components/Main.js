import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import { Bio, Connect4, Onmyline, Beermanbox, Phone, Nyccraft } from './index'

const mapStateToProps = state => {
  return {
    player1: state.player1,
    player2: state.player2,
    board: state.board,
    currentPlayer: state.currentPlayer,
    gameover: state.gameover,
    message: state.message
  }
}

const mapDispatchToProps = dispatch => ({
  
})

class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="computer">
        <div className="screenBox">
          <div className="screen">
            <Switch>
              <Route exact path="/" component={Bio} />
              <Route exact path="/connect4" component={Connect4} />
              <Route exact path="/onmyline" component={Onmyline} />
              <Route exact path="/beermanbox" component={Beermanbox} />
              <Route exact path="/nyccraft" component={Nyccraft} />
              <Route exact path="/phone" component={Phone} />
            </Switch>
          </div>
        </div>
        <div className="utilBox">
          <div className="top">
            <div className="projects">
              <div className="projectWrapper wone"></div>
              <Link to="/onmyline"><div className="projectButton" id="onmylineButton">---------- ON MY LINE ----------</div></Link>
              <Link to="/beermanbox"><div className="projectButton" id="beermanboxButton">---------- BEERMAN BOX ----------</div></Link>
              <Link to="/nyccraft"><div className="projectButton" id="nyccraftButton">---------- NYC CRAFT ----------</div></Link>
              <div className="projectWrapper wtwo"></div>
            </div>
            <div className="projectContent">Look at my Projects!</div>
          </div>
          <div className="middle">
            <div>BORED? PLAY A BORING GAME?</div>
            <Link to={'/connect4'}><button >CONNECT 4</button></Link>
          </div>
          <div className="bottom">
            <div className="linksContent">
              CONTACT ME? DO IT!
            </div>
            <div className="links">
              <a href="https://www.linkedin.com/in/ko-hsin-chu/" target="_blank"><button className="linksButton hvr-sink linkedin"><img  className="linkImage" src="./linkedinWt.png" /></button></a>
              <a href="https://github.com/chukohsin" target="_blank"><button className="linksButton hvr-sink"><img  className="linkImage" src="./gitHubWt.png" /></button></a>
              <a href="mailto:chukohsin@gmail.com?Subject=Hello%20Ko-Hsin"><button className="linksButton hvr-sink"><img  className="linkImage" src="./emailWt.png" /></button></a>
              <a href="./Ko-Hsin_Chu.pdf" target="_blank"><button className="linksButton hvr-sink"><div className="linkImage">CV</div></button></a>
              <Link to="/phone"><button className="linksButton hvr-sink"><div className="buttonCircle home" /><img  className="linkImage" src="./phoneWt.png" /></button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const GameContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Game))
export default GameContainer
