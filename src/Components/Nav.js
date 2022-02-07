import React from "react";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
	const [searchInput, setSearchInput] = useState("");

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
								<NavDropdown.Item>
									<Link
										to={`/categories?category_name=Electronics`}
									>
										Electronics
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link
										to={`/categories?category_name=Household`}
									>
										Household
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link
										to={`/categories?category_name=Clothing`}
									>
										Clothing
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item>
									<Link to={`/`}>Latest</Link>
								</NavDropdown.Item>
							</NavDropdown>

							<Link to={`/search?search=${searchInput}`}>
								<form className="form" onSubmit={handleSubmit}>
									Search By Name{" "}
									<input
										type="text"
										className="input"
										placeholder="Search"
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
