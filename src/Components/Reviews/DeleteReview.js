import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./DeleteReview.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { deleteReview } from "../../utils/api";

const DeleteReview = ({ review_id, owner, reviews, setReviews, index }) => {
	const { loggedInUser } = useContext(UserContext);
	const [reviewToDelete, setReviewToDelete] = useState(0);

	useEffect(() => {
		if (reviewToDelete > 0) {
			deleteReview(review_id);
			const newReviews = [...reviews];
			newReviews.splice(index, 1);
			setReviews(newReviews);
		}
	}, [reviewToDelete]);

	const handleInput = () => {
		setReviewToDelete(review_id);
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
				Delete Review
			</Button>
		</div>
	) : null;
};

export default DeleteReview;
