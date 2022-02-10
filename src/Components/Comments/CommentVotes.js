import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { patchCommentVotes } from "../../utils/api";

const CommentVotes = ({ comment_votes, comment_id }) => {
	const [commentVotes, setCommentVotes] = useState(0);

	const handleCommentVote = (action) => {
		setCommentVotes((currChange) => currChange + action);
		patchCommentVotes(comment_id, action);
	};

	return (
		<div>
			<Card.Text>{comment_votes + commentVotes}</Card.Text>
			<Button variant="secondary" onClick={() => handleCommentVote(1)}>
				<FaThumbsUp />
			</Button>{" "}
			<Button variant="secondary" onClick={() => handleCommentVote(-1)}>
				<FaThumbsDown />
			</Button>
		</div>
	);
};

export default CommentVotes;
