import React, { useEffect, useState } from "react";
import { getReviews, getReviewsByCategory, getReviewsById } from "../utils/api";
import { useSearchParams, useParams } from "react-router-dom";
import "./Reviews.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Reviews = () => {
	let [searchParams, setSearchParams] = useSearchParams();
	const category = searchParams.get("category");
	const { review_id } = useParams();

	const [reviews, setReviews] = useState([]);
	const reviewByIdToArray = [];

	useEffect(() => {
		if (category) {
			getReviewsByCategory(category).then((reviewByCatData) => {
				setReviews(reviewByCatData.reviews);
			});
		} else if (review_id) {
			getReviewsById(review_id).then((reviewById) => {
				reviewByIdToArray.push(reviewById);
				setReviews(reviewByIdToArray);
			});
		} else {
			getReviews().then((reviewData) => {
				setReviews(reviewData);
			});
		}
	}, [category, review_id]);

	return (
		<main>
			<h2>All Reviews</h2>
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
									<ListGroup.Item>
										Votes: {review.votes}
									</ListGroup.Item>
								</ListGroup>
								<Button variant="primary">up-vote</Button>
								<Button variant="primary">down-vote</Button>
							</Card.Body>
							<Card.Footer className="text-muted">
								Posted: {Date.parse(review.created_at)} Id:
								{review.review_id}
							</Card.Footer>
						</Card>
					);
				})}
			</ul>
		</main>
	);
};

export default Reviews;
