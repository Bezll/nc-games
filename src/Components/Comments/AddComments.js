/* eslint-disable */
import ExpandingAddComments from "./ExpandingAddComments";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { postComment } from "../../utils/api";

const AddComments = ({ review_id, comments, setComments }) => {
	const { loggedInUser } = useContext(UserContext);
	const [formBody, setFormBody] = useState({
		author: loggedInUser.username,
		body: "",
	});
	const [submittedInput, setSubmittedInput] = useState({});

	useEffect(() => {
		if (Object.keys(submittedInput).length > 0) {
			postComment(review_id, submittedInput).then((commentJustPosted) => {
				const newComments = [...comments];
				newComments.push(commentJustPosted);
				setComments(newComments);
			});
		}
	}, [submittedInput]);

	const handleInput = (event) => {
		setFormBody((prevState) => ({
			...prevState,
			[event.target.id]: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmittedInput(formBody);
	};

	return (
		<div>
			<ExpandingAddComments>
				<Card>
					<Card.Header as="h5">Add Comment</Card.Header>
					<Card.Body>
						<Form className="inner-form" onSubmit={handleSubmit}>
							<Form.Group className="mb-3">
								<Form.Label>Author</Form.Label>
								<Form.Control
									type="text"
									placeholder={loggedInUser.username}
									disabled
								/>

								<Form.Label>Comment Body</Form.Label>
								<Form.Control
									id="body"
									type="text"
									placeholder="Comment Body"
									onChange={handleInput}
									value={formBody.body}
									required
								/>
							</Form.Group>
							<Button
								disabled={loggedInUser.username === "Sign-in"}
								variant="secondary"
								type="submit"
								onChange={handleInput}
								value={formBody.category}
							>
								Submit
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</ExpandingAddComments>
		</div>
	);
};

export default AddComments;
