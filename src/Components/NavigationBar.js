import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";

const NavigationBar = () => {
	const [searchInput, setSearchInput] = useState("");
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((categoriesFromApi) => {
			setCategories(categoriesFromApi);
		});
	}, []);

	const handleSearch = (event) => {
		setSearchInput(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div>
			<Navbar
				className="nav-bar"
				collapseOnSelect
				expand="lg"
				bg="light"
				variant="light"
			>
				<Container className="container">
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Link to={`/`}>Home</Link>

							<Nav className="users">
								<Link to={`/users`}>Users</Link>
							</Nav>
							<NavDropdown
								className="categories"
								title="Categories"
								id="collasible-nav-dropdown"
							>
								{categories.map((category) => {
									return (
										<NavDropdown.Item key={category.slug}>
											<Link
												to={`/reviews?category=${category.slug}`}
											>
												{category.slug}
											</Link>
										</NavDropdown.Item>
									);
								})}
								<NavDropdown.Divider />
								<NavDropdown.Item>
									<Link to={`/`}>Latest</Link>
								</NavDropdown.Item>
							</NavDropdown>

							<Link to={`/reviews/${searchInput}`}>
								<form className="form" onSubmit={handleSubmit}>
									Search By ID{" "}
									<input
										type="number"
										className="input"
										placeholder="ID Number"
										onChange={handleSearch}
										value={searchInput}
									></input>
									<input type="submit"></input>
								</form>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavigationBar;
