import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";

const ExpandingComments = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button
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
