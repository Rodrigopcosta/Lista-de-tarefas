import { useState } from 'react'
import { Item, Container, TodoList, Input, Button, ListContainer, List } from './App'

function ListaDeTarefas() {
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')

    function inputChange(event) {
        setInputValue(event.target.value)
    }

    function buttonClick() {
        const capitalizedTask = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
        setTasks([...tasks, capitalizedTask])
        setInputValue('') // Limpar o campo de entrada após adicionar a tarefa
    }

    return (
        
        <Container>
            <TodoList>
                <Input name='tarefa' type="text" placeholder="Digite a sua tarefa" onChange={inputChange} />
                <Button onClick={buttonClick}>Adicionar Tarefas</Button>
                <ListContainer>
                <List>
                    {
                        tasks.map((item, index) => (
                            <Item key={index}>{item}</Item>
                        ))
                    }
                </List>
                </ListContainer>
            </TodoList>
        </Container>
    )
}
export default ListaDeTarefas