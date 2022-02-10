import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import "./Users.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { getSingleUsername } from "../../utils/api";

const Users = () => {
	const { setLoggedInUser } = useContext(UserContext);

	const [usernameInput, setUsernameInput] = useState("");
	const [input, setInput] = useState("");
	const [isSuccessful, setIsSuccessful] = useState("");

	useEffect(() => {
		if (input) {
			getSingleUsername(input)
				.then((user) => {
					setLoggedInUser(user);
					setIsSuccessful(true);
				})
				.catch((error) => {
					setIsSuccessful(false);
				});
		}
	}, [input]);

	const handleUsernameEntry = (event) => {
		setUsernameInput(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setInput(usernameInput);
	};

	return (
		<div>
			<ul className="login-form">
				<Card>
					<Card.Header as="h5">Sign-In</Card.Header>
					<Card.Body>
						<Form className="inner-form" onSubmit={handleSubmit}>
							{isSuccessful === true ? (
								<Link to={"/"}>
									<Alert>
										<h4>Login Successful</h4>
									</Alert>
								</Link>
							) : null}
							{isSuccessful === false ? (
								<Alert>
									<h4>Error please try again</h4>
								</Alert>
							) : null}
							<Form.Group className="mb-3">
								<Form.Label>Username</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter username"
									onChange={handleUsernameEntry}
									value={usernameInput}
								/>
								<Form.Text className="text-muted">
									For testing please use jessjelly
								</Form.Text>
							</Form.Group>
							<Button variant="secondary" type="submit">
								Submit
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</ul>
		</div>
	);
};

export default Users;
