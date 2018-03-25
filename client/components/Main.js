import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import { Bio, Connect4, Onmyline, Beermanbox, Phone, Nyccraft, About } from './index'

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
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
        <div className="utilBox">
          <div className="top">
            <div className="projectContent"><u>PROJECTS</u><div><img src="./images/thumbUp.png"/></div></div>
            <div className="projects">
              <div className="projectWrapper wone"></div>
              <Link to="/onmyline"><div className="projectButton animated infinite rubberband" id="onmylineButton">---------- ON MY LINE ----------</div></Link>
              <Link to="/beermanbox"><div className="projectButton" id="beermanboxButton">---------- BEERMAN BOX ----------</div></Link>
              <Link to="/nyccraft"><div className="projectButton" id="nyccraftButton">---------- NYC CRAFT ----------</div></Link>
              <div className="projectWrapper wtwo"></div>
            </div>
            
          </div>
          <div className="middle">
            <Link to='/'><div id="home"><div>&#x25CF;</div><div>HOME</div><div>&#x25CF;</div></div></Link>
            <Link to='/about'><div id="about"><div>&#x25CF;</div><div>ABOUT ME</div><div>&#x25CF;</div></div></Link>
            <div>PLAY A GAME?</div>
            <div className="games">
              <Link id="game1" to='/connect4'><div >CONNECT 4</div></Link>
              <Link id="game2" className="tooltip" to='/'><div >SNAKE<span className="tooltiptext">Under Construction</span></div></Link>
            </div>
          </div>
          <div className="bottom">
            <div className="linksContent">
              <div>CONTACT ME?</div>
              <div>SAY HI? DO IT!</div>
            </div>
            <div className="links">
              <a href="https://www.linkedin.com/in/ko-hsin-chu/" target="_blank"><button className="linksButton hvr-sink linkedin"><img  className="linkImage" src="./images/linkedinWt.png" /></button></a>
              <a href="https://github.com/chukohsin" target="_blank"><button className="linksButton hvr-sink"><img  className="linkImage" src="./images/gitHubWt.png" /></button></a>
              <a href="mailto:chukohsin@gmail.com?Subject=Hello%20Ko-Hsin"><button className="linksButton hvr-sink"><img  className="linkImage" src="./images/emailWt.png" /></button></a>
              <a href="./Ko-Hsin_Chu.pdf" target="_blank"><button className="linksButton hvr-sink"><div className="linkImage">CV</div></button></a>
              <Link to="/phone"><button className="linksButton hvr-sink"><div className="buttonCircle home" /><img  className="linkImage" src="./images/phoneWt.png" /></button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const GameContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Game))
export default GameContainer
