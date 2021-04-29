import React from 'react'

const Title = (props) => {
	

	return (
		<div className="title">
			<h1>{
					props.edicion?"Tareas":"Editando..."
				}	
			</h1>
		</div>
	)
}

export default Title
