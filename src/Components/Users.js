import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Users.css";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { getUsernames, getSingleUsername } from "../utils/api";

const Users = () => {
	const { setLoggedInUser } = useContext(UserContext);

	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [input, setInput] = useState("");
	const [usernames, setUsernames] = useState(["jessjelly"]);

	// useEffect(() => {
	// 	if (usernames.includes(usernameInput)) {
	// 		getSingleUsername(usernameInput).then((usernameFromApi) => {
	// 			console.log(usernameInput, "hereeee");
	// 			console.log(usernameFromApi, "here");
	// 			setLoggedInUser(usernameFromApi.username);
	// 		});
	// 	}
	// }, [input]);

	useEffect(() => {
		getUsernames().then((usernamesFromApi) => {
			setUsernames(usernamesFromApi);
			console.log(usernamesFromApi, "usernamesFromApi");
			console.log(usernames, "usernames");
		});
	}, []);

	const handleUsernameEntry = (event) => {
		setUsernameInput(event.target.value);
	};

	const handlePasswordEntry = (event) => {
		setPasswordInput(event.target.value);
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
							<Form.Group className="mb-3">
								<Form.Label>Username</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter username"
									onChange={handleUsernameEntry}
									value={usernameInput}
								/>
								<Form.Text className="text-muted">
									For testing please use Bez123
								</Form.Text>
							</Form.Group>

							<Form.Group
								className="mb-3"
								controlId="formBasicPassword"
							>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
									onChange={handlePasswordEntry}
									value={passwordInput}
								/>
								<Form.Text className="text-muted">
									For testing please use password
								</Form.Text>
							</Form.Group>

							<Button variant="secondary" type="submit">
								Submit
							</Button>
						</Form>
					</Card.Body>
					<Card.Text>
						{" "}
						Don't have an account? Sign-up{" "}
						<Link to={`/users/sign-up`}>here</Link>
					</Card.Text>
				</Card>
			</ul>
		</div>
	);
};

export default Users;
