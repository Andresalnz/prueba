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

    return {tareas,tarea,setTarea,change}
}

export default useAdd;