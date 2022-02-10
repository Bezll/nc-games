import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import UserProfile from "../Users/UserProfile";
import { getCategories } from "../../utils/api";

const NavigationBar = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((categoriesFromApi) => {
			setCategories(categoriesFromApi);
		});
	}, []);

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
							{/* <UserProfile /> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* <div>
				<Link
					style={{ textDecoration: "none" }}
					className="form"
					to={`/reviews/${searchInput}`}
				>
					<InputGroup className="search-by-id">
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
			</div> */}
		</div>
	);
};

export default NavigationBar;
