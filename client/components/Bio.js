import React from 'react'
import Confetti from 'react-dom-confetti';


class Bio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {showSoftware: true, confetti: false}
		this.handleClick = this.handleClick.bind(this)
		this.handleConfetti = this.handleConfetti.bind(this)
	}

	handleClick() {
		this.setState({showSoftware: !this.state.showSoftware})
	}

	handleConfetti() {
		this.setState({confetti: !this.state.confetti})
	}

	render() {
		const config = {
		  angle: 168,
		  spread: 75,
		  startVelocity: 24,
		  elementCount: 109,
		  decay: 0.95
		}
		let pm = this.state.showSoftware === true ? '-' : '+'
		let pm2 = this.state.confetti === true ? '-' : '+'
		return (
			<div className="profileContent">
				<div className="meIcon"><span id="name" className="blink">i'm KO-HSIN CHU</span><img style={{width: '7vw', height: '7vw'}} src="./images/me/meIcon2.png" /><Confetti active={ this.state.confetti } config={ config }/></div>
				<p>-------------------------</p>
				<div id="meDetails">
					<div>A Software Engineer<button className="plus" onClick={this.handleClick}>{pm}</button></div>
					{
						this.state.showSoftware &&
						<div id='stacks'>I play hard, work even harder and get things done (well) !</div>
					}
					<div id="beer">A Beer Enthusiast<button onClick={this.handleConfetti} className="plus">{pm2}</button></div>
					{
						this.state.confetti &&
						<div style={{backgroundColor: '#F5B041'}} id='stacks'>I love beer! Let's talk about beer! Cheers!!!</div>
					}
					<div>based in Brooklyn, NY  :)</div>
				</div>
			</div>
		)
	}
}

export default Bio
//<div id='stacks'>JavaScript, React, Redux, Node.js, Express, PostgreSQL, HTML, CSS3, D3, ES6, Git</div>