import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./ExpandingComments.css";

const ExpandingComments = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button
				className="expanding-comments-button"
				variant="secondary"
				onClick={() => {
					setIsOpen((currOpen) => !currOpen);
				}}
			>
				{isOpen ? "Close Comments" : "Open Comments"}
			</Button>
			{isOpen ? children : null}
		</>
	);
};

export default ExpandingComments;
