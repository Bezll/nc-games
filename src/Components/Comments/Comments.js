/* eslint-disable */
import { useEffect, useState } from "react";
import ExpandingComments from "./ExpandingComments";
import { getCommentsByReviewId } from "../../utils/api";
import CommentVotes from "./CommentVotes";
import AddComments from "./AddComments";
import DeleteComment from "./DeleteComment";
import Card from "react-bootstrap/Card";
import "./Comments.css";

const Comments = ({ review_id, comment_count }) => {
	const [comments, setComments] = useState([]);
	const commentCountToNum = Number(comment_count);

	useEffect(() => {
		if (commentCountToNum !== 0) {
			getCommentsByReviewId(review_id).then((commentsByReviewId) => {
				setComments(commentsByReviewId);
			});
		}
	}, [review_id]);

	return commentCountToNum === 0 ? null : (
		<div>
			<ExpandingComments>
				<ul>
					{comments.map((comment, index) => {
						return (
							<Card className="comment-cards" key={index}>
								<Card.Header className="comment-cards-headers">
									{comment.author}
								</Card.Header>
								<Card.Body>
									<Card.Text>{comment.body}</Card.Text>
								</Card.Body>
								<CommentVotes
									comment_id={comment.comment_id}
									comment_votes={comment.votes}
								/>
								<DeleteComment
									comments={comments}
									setComments={setComments}
									index={index}
									comment_id={comment.comment_id}
									owner={comment.author}
								/>
							</Card>
						);
					})}
				</ul>
				<AddComments
					review_id={review_id}
					comments={comments}
					setComments={setComments}
				/>
			</ExpandingComments>
		</div>
	);
};

export default Comments;
