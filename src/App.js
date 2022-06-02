import "./App.css";
import CounterApp from "./CounterApp/CounterApp";
import CounterAppToolkit from "./CounterAppToolkit/CounterAppToolkit";
import Todos from "./Todos/Todos";

function App() {
	return (
		<div className='App'>
			{/* <CounterApp /> */}
			{/* <Todos /> */}
			<CounterAppToolkit />
		</div>
	);
}

export default App;
