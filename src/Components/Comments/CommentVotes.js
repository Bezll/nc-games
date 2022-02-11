import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { patchCommentVotes } from "../../utils/api";

const CommentVotes = ({ comment_votes, comment_id }) => {
	const [commentVotes, setCommentVotes] = useState(0);
	const [disabledVote, setDisabledVote] = useState(false);

	const handleCommentVote = (action) => {
		setCommentVotes((currChange) => currChange + action);
		patchCommentVotes(comment_id, action);
		setDisabledVote(true);
	};

	return (
		<div>
			<Card.Text>{comment_votes + commentVotes}</Card.Text>
			<Button
				variant="secondary"
				hidden={disabledVote}
				onClick={() => handleCommentVote(1)}
			>
				<FaThumbsUp />
			</Button>{" "}
			<Button
				variant="secondary"
				hidden={disabledVote}
				onClick={() => handleCommentVote(-1)}
			>
				<FaThumbsDown />
			</Button>
		</div>
	);
};

export default CommentVotes;
