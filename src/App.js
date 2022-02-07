import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import Reviews from "./Components/Reviews";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<NavigationBar />
			<Routes>
				<Route path="/" element={<Reviews />} />
				<Route path="/reviews" element={<Reviews />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
