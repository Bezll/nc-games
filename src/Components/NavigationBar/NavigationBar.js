import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import { getCategories } from "../../utils/api";
import UserProfile from "../Users/UserProfile";

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
				variant="light"
			>
				<Container className="container">
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Link className="home" to={`/`}>
								Home
							</Link>
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
							<div>
								<Link
									className="form"
									to={`/reviews/${searchInput}`}
								>
									<InputGroup className="mb-3">
										<InputGroup.Text
											onSubmit={handleSubmit}
											id="inputGroup-sizing-default"
										>
											Search by ID
										</InputGroup.Text>
										<FormControl
											aria-label="Default"
											aria-describedby="inputGroup-sizing-default"
											type="number"
											onChange={handleSearch}
											value={searchInput}
										/>
									</InputGroup>
								</Link>
							</div>
							<UserProfile />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavigationBar;
