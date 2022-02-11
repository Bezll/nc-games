import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { getCategories } from "../../utils/api";

const CreateReview = () => {
	const { loggedInUser } = useContext(UserContext);

	const [formBody, setFormBody] = useState({
		title: "",
		designer: "",
		owner: loggedInUser.username,
		review_body: "",
		category: "",
		votes: 0,
	});
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((categoriesFromApi) => {
			setCategories(categoriesFromApi);
		});
	}, []);

	const handleInput = (event) => {
		setFormBody((prevState) => ({
			...prevState,
			[event.target.id]: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// setInput(usernameInput);
	};

	return (
		<div>
			<ul className="login-form">
				<Card>
					<Card.Header as="h5">Create Review</Card.Header>
					<Card.Body>
						<Form className="inner-form" onSubmit={handleSubmit}>
							<Form.Group className="mb-3">
								<Form.Label>Author</Form.Label>
								<Form.Control
									type="text"
									placeholder={loggedInUser.username}
									disabled
								/>
								<Form.Text className="text-muted">
									You must be logged in to add a new review
								</Form.Text>
								<div></div>
								<Form.Label>Title</Form.Label>
								<Form.Control
									id="title"
									type="text"
									placeholder="Game Title"
									onChange={handleInput}
									value={formBody.title}
								/>
								<Form.Label>Designer</Form.Label>
								<Form.Control
									id="designer"
									type="text"
									placeholder="Enter the game's creator"
									onChange={handleInput}
									value={formBody.designer}
								/>
								<Form.Label>Body of Review</Form.Label>
								<Form.Control
									id="review_body"
									type="text"
									placeholder="Main body of the review"
									onChange={handleInput}
									value={formBody.review_body}
								/>
								<Form.Label>Category</Form.Label>
								<Form.Select
									disabled={formBody.category !== ""}
								>
									<option key="select-category">
										Select Category
									</option>
									{categories.map((category) => {
										return (
											<option key={category.slug}>
												{category.slug}
											</option>
										);
									})}
								</Form.Select>
								<Form.Control
									id="category"
									type="text"
									placeholder="Add new Category"
									onChange={handleInput}
									value={formBody.category}
								/>
							</Form.Group>
							<Button
								disabled={loggedInUser.username === "Sign-in"}
								variant="secondary"
								type="submit"
							>
								Submit
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</ul>
		</div>
	);
};

export default CreateReview;

// {isSuccessful === true ? (
//     <Link to={"/"}>
//         <Alert>
//             <h4>Login Successful</h4>
//         </Alert>
//     </Link>
// ) : null}
// {isSuccessful === false ? (
//     <Alert>
//         <h4>Error please try again</h4>
//     </Alert>
// ) : null}
