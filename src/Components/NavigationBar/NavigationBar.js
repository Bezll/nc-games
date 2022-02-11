import React from "react";
import "./NavigationBar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import UserProfile from "../Users/UserProfile";

const NavigationBar = () => {
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
							<Link to={`/reviews`}> Create Review</Link>
							<UserProfile />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavigationBar;
