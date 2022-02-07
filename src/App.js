import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
// import Nav from "./Components/Nav";
import Reviews from "./Components/Reviews";

function App() {
	return (
		<BrowserRouter>
			<Header />
			{/* <Nav /> */}
			<Routes>
				<Route path="/" element={<Reviews />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
