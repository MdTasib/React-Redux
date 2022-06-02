import "./App.css";
import CounterApp from "./CounterApp/CounterApp";
import CounterAppToolkit from "./CounterAppToolkit/CounterAppToolkit";
import TodoAppToolkit from "./TodoAppToolkit/TodoAppToolkit";
import Todos from "./Todos/Todos";

function App() {
	return (
		<div className='App'>
			{/* <CounterApp /> */}
			{/* <Todos /> */}
			{/* <CounterAppToolkit /> */}
			<TodoAppToolkit />
		</div>
	);
}

export default App;
