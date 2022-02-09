import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import Reviews from "./Components/Reviews";
import Users from "./Components/Users";
import SignUp from "./Components/SignUp";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<NavigationBar />
				<Routes>
					<Route path="/users" element={<Users />} />
					<Route path="/users/sign-up" element={<SignUp />} />
					<Route path="/" element={<Reviews />} />
					<Route path="/reviews" element={<Reviews />} />
					<Route path="/reviews/:review_id" element={<Reviews />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
