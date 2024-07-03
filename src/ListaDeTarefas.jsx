import { useState } from 'react'

function ListaDeTarefas() {
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')

    function inputChange(event) {
        setInputValue(event.target.value)  
    }

    function buttonClick() {
        setTasks([...tasks, inputValue])
    } 

    return (
        <div>
            <input type="text" placeholder="Digite a sua tarefa" onChange={inputChange} />
            <button onClick={buttonClick}>Adicionar Tarefas</button>

            <ul>
                {
                    tasks.map(item => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default ListaDeTarefas