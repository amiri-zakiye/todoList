import Todos from "./components/todos"
import { TodosProvider } from "./context/todo"
import Container from "./layouts/container"

function App() {

  return (
    <TodosProvider>
      <Container>
        <Todos />
      </Container>
    </TodosProvider>
  )
}

export default App
