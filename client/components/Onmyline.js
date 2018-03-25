import React from 'react'


class Onmyline extends React.Component {
	constructor(props) {
		super(props)
		this.state = {page: 0}
		this.handleRight = this.handleRight.bind(this)
		this.handleLeft = this.handleLeft.bind(this)
	}

	handleRight() {
		let pageNum = (this.state.page + 1) % 5
		this.setState({page: pageNum})
	}

	handleLeft() {
		let pageNum = this.state.page === 0 ? 4 : (this.state.page - 1) % 5
		this.setState({page: pageNum})
	}

	render() {
		const image = `./images/oml/oml${this.state.page}.png`
		return (
			<div className="screenContent">
				<div className="title">
						<div className="">ON MY LINE</div>
				</div>
				{
					this.state.page === 0 ?
					<div className="omlDetail" >
						<p>A Progressive Web App for finding variety of events and places off of your subway line</p>
						<p>--------------------------------</p>
						<p>D3 • Firebase • React • React-Redux • Express • NodeJS • CSS3</p>
					</div>
					: <img className="omlImg" src={image} />
				}
				<div className="pLinks">
					<button className="pLink arrowLeft" onClick={this.handleLeft}><div>&lt;&lt;</div></button>
					<div className="pLink"><a href="http://on-my-line.herokuapp.com/" target="_blank">GO TO WEBSITE</a></div>
					<div className="pLink"><a href="https://youtu.be/jBFyB05tqOY" target="_blank">SEE PRESENTATION</a></div>
					<button className="pLink arrowRight"  onClick={this.handleRight}><div>&gt;&gt;</div></button>
				</div>

			</div>
		)
	}
}

export default Onmyline

//<p>D3, Firebase, React, React-Redux, Express, Node.js</p>
//<p>PWA for finding variety of events and places off of your subway line</p>	