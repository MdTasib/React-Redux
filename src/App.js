import "./App.css";
import CounterApp from "./CounterApp/CounterApp";
import CounterAppToolkit from "./CounterAppToolkit/CounterAppToolkit";
import CrudToolkit from "./CrudToolkit/CrudToolkit";
import TodoAppToolkit from "./TodoAppToolkit/TodoAppToolkit";
import Todos from "./Todos/Todos";

function App() {
	return (
		<div className='App'>
			{/* <CounterApp /> */}
			{/* <Todos /> */}
			{/* <CounterAppToolkit /> */}
			{/* <TodoAppToolkit /> */}
			<CrudToolkit />
		</div>
	);
}

export default App;
