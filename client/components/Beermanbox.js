import React from 'react'


class Beermanbox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {page: 1}
		this.handleRight = this.handleRight.bind(this)
	}

	handleRight() {
		let pageNum = (this.state.page + 1) % 2  === 0 ? 2 : 1
		this.setState({page: pageNum})
	}

	render() {
		const image = `./oml/oml${this.state.page}.png`
		return (
			<div className="screenContent">
				<div className="projectDetail">
					<p><span className="title">BEERMAN BOX</span></p>
					<p>Educational phaser.io game teaching users about various beer styles</p>
					
				</div>
				<div>
					<img className="omlImg" src={image} />
				</div>
				<div className="pLinks">
					<div className="pLink arrowLeft">&lt;&lt;</div>
					<div className="pLink"><a href="http://on-my-line.herokuapp.com/" target="_blank">WEBSITE</a></div>
					<div className="pLink"><a href="https://youtu.be/jBFyB05tqOY" target="_blank">PRESENTATION</a></div>
					<button className="pLink arrowRight"  onClick={this.handleRight}><div>&gt;&gt;</div></button>
				</div>

			</div>
		)
	}
}


export default Beermanbox
