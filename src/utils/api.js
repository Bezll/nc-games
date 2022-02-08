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

export const getReviewsByCategory = (category) => {
	return api.get(`/reviews?category=${category}`).then(({ data }) => {
		return data;
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
