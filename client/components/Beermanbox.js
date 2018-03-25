import React from 'react'


class Onmyline extends React.Component {
	constructor(props) {
		super(props)
		this.state = {page: 0}
		this.handleRight = this.handleRight.bind(this)
		this.handleLeft = this.handleLeft.bind(this)
	}

	handleRight() {
		let pageNum = (this.state.page + 1) % 4
		this.setState({page: pageNum})
	}

	handleLeft() {
		let pageNum = this.state.page === 0 ? 3 : (this.state.page - 1) % 4
		this.setState({page: pageNum})
	}

	render() {
		const image = `./images/bmb/bmb${this.state.page}.png`
		return (
			<div className="screenContent">
				<div className="title">
						<div className="">BEERMAN BOX</div>
				</div>
				{
					this.state.page === 0 ?
					<div className="omlDetail" >
						<p>Educational phaser.io game which teaches users about various beer styles</p>
						<p>--------------------------------</p>
						<p>Phaser.io • Cheerio.js • React • React-Redux • Express • NodeJS • PostgreSQL
</p>
					</div>
					: <img className="omlImg" src={image} />
				}
				<div className="pLinks">
					<button className="pLink arrowLeft" onClick={this.handleLeft}><div>&lt;&lt;</div></button>
					<div className="pLink"><a href="https://beerman-box.herokuapp.com/" target="_blank">GO TO WEBSITE</a></div>
					<div className="pLink"><a href="https://youtu.be/j8dXoAcxeec" target="_blank">SEE PRESENTATION</a></div>
					<button className="pLink arrowRight"  onClick={this.handleRight}><div>&gt;&gt;</div></button>
				</div>

			</div>
		)
	}
}

export default Onmyline
