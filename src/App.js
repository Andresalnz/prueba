import './App.css';
import Title from './Components/Title';
import Input from './Components/Input';
import Button from './Components/Button';
import edit from './Hooks/Edit'
import add from './Hooks/Add'
import ListTask from './Components/ListTask';


function App() {
  const {editando,edicion,editando2}=edit()
  const {tarea,setTarea,change}=add()

  return (

    <div className="App">
      <header className="content">
        <Title
          edicion={edicion}
        />
        <form onSubmit={change} className="form-tasks">
          <Input 
            state="text" 
            name="Escribe aqui..." 
            class="input-task"
            value={tarea}
            change={evt=>setTarea(evt.target.value)}
          /> 
          <Button
            type="submit"
            value="Agregar"
            class="button-task"
          />
        </form>
        <ListTask/>
       
        {/* <Button
          editando={edicion?editando:editando2}
          value="Editar"
        /> */}
      </header>
    </div>
  );
}

export default App;
