import React from 'react'


class Onmyline extends React.Component {
	constructor(props) {
		super(props)
		this.state = {page: 0}
		this.handleRight = this.handleRight.bind(this)
		this.handleLeft = this.handleLeft.bind(this)
	}

	handleRight() {
		let pageNum = (this.state.page + 1) % 6
		this.setState({page: pageNum})
	}

	handleLeft() {
		let pageNum = this.state.page === 0 ? 5 : (this.state.page - 1) % 6
		this.setState({page: pageNum})
	}

	render() {
		const image = `./images/nycc/nycc${this.state.page}.png`
		return (
			<div className="screenContent">
				<div className="title">
						<div className="">NYC CRAFT</div>
				</div>
				{
					this.state.page === 0 ?
					<div className="omlDetail" >
						<p>An e-commerce store that offers a variety of craft beers.</p>
						<p>--------------------------------</p>
						<p>React • Redux • NodeJS • ExpressJS • PostgreSQL • Sequelize • Stripe • NodeMailer • PassportJS • CSS3</p>
					</div>
					: <img className="omlImg" src={image} />
				}
				<div className="pLinks">
					<button className="pLink arrowLeft" onClick={this.handleLeft}><div>&lt;&lt;</div></button>
					<div className="pLink"><a href="https://beer-beer-beer-beer-beer.herokuapp.com/" target="_blank">GO TO WEBSITE</a></div>
					<button className="pLink arrowRight"  onClick={this.handleRight}><div>&gt;&gt;</div></button>
				</div>

			</div>
		)
	}
}

export default Onmyline