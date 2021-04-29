import React from 'react'
import add from '../Hooks/Add'
import Task from './Task'

const ListTask = () => {

    const {tareas}=add()
    console.log(tareas)
    return (
        <div>
             {
                tareas.map(item=>
                    // <Task
                    // tarea={props.nombreTarea}
                    // />
                    <p>{item.nombreTarea}</p>

                )
            }
        </div>
    )
}

export default ListTask
