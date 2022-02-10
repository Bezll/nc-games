import React, { useEffect, useState } from "react";
import {
	getReviews,
	getReviewsByCategory,
	getReviewsById,
	getReviewsBySortBy,
} from "../../utils/api";
import { formatDate } from "../../utils/utils";
import { useSearchParams, useParams } from "react-router-dom";
import "./Reviews.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Comments from "../../Components/Comments/Comments";
import SortOrder from "../SortAndPagination/SortOrder";
import ReviewVotes from "./ReviewVotes";

const Reviews = () => {
	let [searchParams, setSearchParams] = useSearchParams();
	const category = searchParams.get("category");
	const sort_by = searchParams.get("sort_by");
	const order = searchParams.get("order");
	const page = searchParams.get("page");
	const items_per_page = searchParams.get("items_per_page");
	const { review_id } = useParams();

	const [reviews, setReviews] = useState([]);
	const reviewByIdToArray = [];

	useEffect(() => {
		if (category) {
			getReviewsByCategory(category).then((reviewByCatData) => {
				setReviews(reviewByCatData);
			});
		} else if (review_id) {
			getReviewsById(review_id).then((reviewById) => {
				reviewByIdToArray.push(reviewById);
				setReviews(reviewByIdToArray);
			});
		} else if ((sort_by, order, page, items_per_page)) {
			getReviewsBySortBy(sort_by, order, page, items_per_page).then(
				(reviewsBySortBy) => {
					setReviews(reviewsBySortBy);
				}
			);
		} else {
			getReviews().then((reviewData) => {
				setReviews(reviewData);
			});
		}
	}, [category, review_id, sort_by, order, page, items_per_page]);

	return (
		<main>
			<SortOrder />
			<ul>
				{reviews.map((review) => {
					return (
						<Card
							border="secondary"
							key={review.review_id}
							className="text-center"
						>
							<ul className="img-container">
								<Card.Img
									className="card-img"
									variant="top"
									src={review.review_img_url}
								/>
							</ul>

							<Card.Header>
								Category: {review.category}
							</Card.Header>
							<Card.Body>
								<Card.Title>{review.title}</Card.Title>
								<ListGroup variant="flush">
									<ListGroup.Item>
										Designer: {review.designer}
									</ListGroup.Item>
								</ListGroup>
								<Card.Text>{review.review_body}</Card.Text>
								<ListGroup variant="flush">
									<ListGroup.Item>
										Author: {review.owner}
									</ListGroup.Item>
									<ListGroup.Item>
										Comment Count: {review.comment_count}
									</ListGroup.Item>
								</ListGroup>
								<ReviewVotes
									review_votes={review.votes}
									review_id={review.review_id}
								/>
							</Card.Body>
							<Card.Footer className="text-muted">
								ID:
								{review.review_id} Posted:{" "}
								{formatDate(review.created_at)}
							</Card.Footer>
							<Comments
								review_id={review.review_id}
								comment_count={review.comment_count}
							/>
						</Card>
					);
				})}
			</ul>
		</main>
	);
};

export default Reviews;
