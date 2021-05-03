import {useState} from 'react'

function useAdd(){
    const [tarea, setTarea] = useState("")
    const [tareas, setTareas] = useState([])
    const change = (evt)=>{
        evt.preventDefault()
        console.log('ejecuta')
        setTareas([
            ...tareas,
            {nombretarea:tarea}
        ])    
    }

    const onChangeTaskInput = (evt)=>{
      evt.preventDefault()
      setTarea(evt.target.value)    
  }

    return {tareas,tarea,onChangeTaskInput,change}
}

export default useAdd;