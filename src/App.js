import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Reviews from "./Components/Reviews/Reviews";
import Users from "./Components/Users/Users";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<NavigationBar />
				<Routes>
					<Route path="/users" element={<Users />} />
					<Route path="/" element={<Reviews />} />
					<Route path="/reviews" element={<Reviews />} />
					<Route path="/reviews/:review_id" element={<Reviews />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
