import {useState} from 'react'

 function useEdit (){
    const [edicion, setEdicion] = useState(true)
    
    const editando =()=>{
        setEdicion(false)
    }
    const editando2 =()=>{
        setEdicion(true)
    }

    return {edicion,editando,editando2};
}

export default useEdit;

