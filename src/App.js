// import logo from "./logo.svg";
import "./App.css";
import Data from "./data.json";
function App() {
	return (
		<div className="App">
			<div className="players">
				{Data.map((post) => {
					return (
						<div className="card">
							<h4>{post.name}</h4>
							<img src={post.photo} alt="" />
							<h4>{post.value}</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
