import React from 'react'

const ListTask = (props) => {

  return (
    <div>
      {
        props.tasks.map((item, index) =>
          // <Task
          // tarea={props.nombreTarea}
          // />
          <p key={index} >{item.nombretarea}</p>

        )
      }
    </div>
  )
}

export default ListTask
