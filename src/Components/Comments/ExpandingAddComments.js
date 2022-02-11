import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./ExpandingAddComments.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";

const ExpandingAddComments = ({ children }) => {
	const { loggedInUser } = useContext(UserContext);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button
				disabled={loggedInUser.username === "Sign-in"}
				className="expanding-add-comments-button"
				variant="secondary"
				type="submit"
				onClick={() => {
					setIsOpen((currOpen) => !currOpen);
				}}
			>
				Add Comment
			</Button>
			{isOpen ? children : null}
		</>
	);
};

export default ExpandingAddComments;
