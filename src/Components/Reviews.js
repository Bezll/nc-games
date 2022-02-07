import React, { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import "./Reviews.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		getReviews().then((reviewData) => {
			setReviews(reviewData);
		});
	});

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
							<Card.Img
								className="card-img"
								variant="top"
								src={review.review_img_url}
							/>
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
								{Date.parse(review.created_at)}
							</Card.Footer>
						</Card>
					);
				})}
			</ul>
		</main>
	);
};

export default Reviews;
