import React from 'react'
import Cell from './Cell.js'

const Row = (props) => {
	let { row, play } = props
	return (
		<tr>
			{
				row.map((el, i) => <Cell key={i} value={el}/>)
			}
		</tr>
	)
}

export default Row
