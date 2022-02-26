/* eslint-disable */
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { deleteComment } from "../../utils/api";

const DeleteComment = ({ comment_id, owner, comments, setComments, index }) => {
	const { loggedInUser } = useContext(UserContext);
	const [commentToDelete, setCommentToDelete] = useState(0);

	useEffect(() => {
		if (commentToDelete > 0) {
			deleteComment(comment_id);
			const newComments = [...comments];
			newComments.splice(index, 1);
			setComments(newComments);
		}
	}, [commentToDelete]);

	const handleInput = () => {
		setCommentToDelete(comment_id);
	};
	return owner === loggedInUser.username ? (
		<div>
			{" "}
			<Button
				className="delete-button"
				variant="secondary"
				type="submit"
				onClick={handleInput}
			>
				Delete Comment
			</Button>
		</div>
	) : null;
};

export default DeleteComment;
