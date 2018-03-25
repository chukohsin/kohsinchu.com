import React from 'react'
import Confetti from 'react-dom-confetti';


class About extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="profileContent">
				<div className="meIcon"><img style={{width: '7vw', height: '7vw'}}src="./images/me/meStack1.png" /><span id="name" className="blink">MY STACKS</span></div>
				<p>-------------------------</p>
				<div style={{fontSize: '4vw'}} id="stackDetails">
					<div>JAVASCRIPT • ES6 • REACT • REDUX • EXPRESS • NODEJS • POSTGRESQL</div>
					<div>HTML • CSS3 • D3 • Bootstrap</div>
					<div>SQL • GIT • OAUTH • HEROKU</div>
					<div>JASMINE • MOCHA • ENZYME • CHAI</div>
				</div>
			</div>
		)
	}
}

export default About