import { useEffect, useState } from "react";
import ExpandingComments from "./ExpandingComments";
import { getCommentsByReviewId } from "../utils/api";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Comments = ({ review_id, comment_count }) => {
	const [comments, setComments] = useState([]);
	const commentCountToNum = Number(comment_count);

	useEffect(() => {
		if (commentCountToNum !== 0) {
			getCommentsByReviewId(review_id).then((commentsByReviewId) => {
				setComments(commentsByReviewId);
			});
		}
	}, [review_id, commentCountToNum]);

	return commentCountToNum === 0 ? null : (
		<div>
			<ExpandingComments>
				<ul>
					{comments.map((comment) => {
						return (
							<Card key={comment.comment_id}>
								<Card.Header>{comment.author}</Card.Header>
								<Card.Body>
									<Card.Text>
										{comment.body}{" "}
										<Button variant="secondary">
											vote-up
										</Button>{" "}
										<Button variant="secondary">
											vote-down
										</Button>
									</Card.Text>
								</Card.Body>
							</Card>
						);
					})}
				</ul>
			</ExpandingComments>
		</div>
	);
};

export default Comments;
