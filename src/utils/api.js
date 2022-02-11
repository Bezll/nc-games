import axios from "axios";

const api = axios.create({
	baseURL: "https://nc-game-reviews-project.herokuapp.com/api",
});

export const getReviews = () => {
	return api.get("/reviews").then(({ data }) => {
		return data.reviews;
	});
};

export const getCategories = () => {
	return api.get("/categories").then(({ data }) => {
		return data.categories;
	});
};

export const getReviewsByCategory = (category, order, page, items_per_page) => {
	return api
		.get(
			`/reviews?category=${category}&&order=${order}&&page=${page}&&items_per_page=${items_per_page}`
		)
		.then(({ data }) => {
			return data.reviews;
		});
};

export const getReviewsBySortBy = (sort_by, order, page, items_per_page) => {
	return api
		.get(
			`/reviews?sort_by=${sort_by}&&order=${order}&&page=${page}&&items_per_page=${items_per_page}`
		)
		.then(({ data }) => {
			return data.reviews;
		});
};

export const getReviewsById = (review_id) => {
	return api.get(`/reviews/${review_id}`).then(({ data }) => {
		return data.review;
	});
};

export const getCommentsByReviewId = (review_id) => {
	return api.get(`/reviews/${review_id}/comments`).then(({ data }) => {
		return data.comments;
	});
};

export const patchReviewVotes = (review_id, action) => {
	return api
		.patch(`/reviews/${review_id}`, { inc_votes: action })
		.then(({ data }) => {
			return data.comments;
		});
};

export const patchCommentVotes = (comment_id, action) => {
	return api
		.patch(`/reviews/comments/${comment_id}`, { inc_votes: action })
		.then(({ data }) => {
			return data.comments;
		});
};

export const getSingleUsername = (username) => {
	return api.get(`/users/${username}`).then(({ data }) => {
		return data.user;
	});
};

export const postReview = (formBody) => {
	return api.post(`/review`, formBody).then(({ data }) => {
		return data;
	});
};

export const deleteReview = (review_id) => {
	return api.delete(`/reviews/${review_id}`).then(({ data }) => {
		return data;
	});
};

export const postComment = (review_id, formBody) => {
	return api
		.post(`/reviews/${review_id}/comments`, formBody)
		.then(({ data }) => {
			return data.comments;
		});
};

export const deleteComment = (comment_id) => {
	console.log(comment_id);
	return api.delete(`/reviews/comments/${comment_id}`).then(({ data }) => {
		return data;
	});
};
