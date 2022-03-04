import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./ReviewVotes.css";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { patchReviewVotes } from "../../utils/api";

const ReviewVotes = ({ review_votes, review_id }) => {
	const [disabledVote, setDisabledVote] = useState(false);

	const handleReviewVote = (action) => {
		patchReviewVotes(review_id, action);
		setDisabledVote(true);
	};

	return (
		<div>
			<ListGroup.Item>Votes: {review_votes}</ListGroup.Item>
			<Button
				className="review-votes-buttons"
				variant="secondary"
				onClick={() => handleReviewVote(1)}
				hidden={disabledVote}
			>
				<FaThumbsUp />
			</Button>{" "}
			<Button
				className="review-votes-buttons"
				variant="secondary"
				onClick={() => handleReviewVote(-1)}
				hidden={disabledVote}
			>
				<FaThumbsDown />
			</Button>
		</div>
	);
};

export default ReviewVotes;
